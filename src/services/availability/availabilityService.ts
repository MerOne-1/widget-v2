import { Employee, DaySchedule, ScheduleException, Shift, Booking } from '../api/types';

interface TimeSlot {
  start: string;
  end: string;
}

interface DaySchedule {
  isWorking: boolean;
  timeSlots: TimeSlot[];
}

interface WeeklySchedule {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

interface Exception {
  startDate: string;
  endDate: string;
  type: 'holiday' | 'custom';
  timeSlots: TimeSlot[];
  note?: string;
  id: string;
}

interface FirebaseSchedule {
  weeklySchedule: WeeklySchedule;
  exceptions?: Exception[];
}

const DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;
type DayOfWeek = typeof DAYS_OF_WEEK[number];

export class AvailabilityService {
  /**
   * Get the day schedule for a specific date, considering exceptions
   */
  static async getScheduleForDate(employee: Employee, date: Date, requiredDuration?: number): Promise<DaySchedule | null> {
    console.log('Getting schedule for employee:', {
      employeeId: employee.id,
      employeeName: employee.name,
      date: date.toISOString(),
      rawSchedule: employee.schedule
    });
    
    const fbSchedule = employee.schedule as unknown as FirebaseSchedule;
    console.log('Parsed Firebase schedule:', {
      weeklySchedule: fbSchedule.weeklySchedule,
      exceptions: fbSchedule.exceptions
    });
    
    // First check if there's an exception for this date
    const exception = this.findException(employee, date);
    if (exception) {
      // If it's a holiday, the employee is not available
      if (exception.type === 'holiday') {
        return {
          isWorking: false,
          timeSlots: []
        };
      }
      return {
        isWorking: true,
        timeSlots: exception.timeSlots
      };
    }

    // If no exception, get the regular weekly schedule
    const dayOfWeek = DAYS_OF_WEEK[date.getDay()];
    console.log('Checking availability for:', {
      dayOfWeek,
      dayNumber: date.getDay(),
      hasWeeklySchedule: !!fbSchedule.weeklySchedule,
      availableDays: fbSchedule.weeklySchedule ? Object.keys(fbSchedule.weeklySchedule) : [],
      daySchedule: fbSchedule.weeklySchedule?.[dayOfWeek]
    });
    
    // Get the schedule for this day
    const daySchedule = fbSchedule.weeklySchedule?.[dayOfWeek];
    if (!daySchedule || !daySchedule.isWorking || !daySchedule.timeSlots?.length) {
      console.log('No working schedule found for day:', { dayOfWeek, daySchedule });
      return {
        isWorking: false,
        timeSlots: []
      };
    }
    
    console.log('Found working schedule for day:', { dayOfWeek, daySchedule, timeSlots: daySchedule.timeSlots });

    // Get bookings for this date from the employee data
    const dateStr = this.formatDate(date);
    console.log('Checking bookings for date:', dateStr);
    console.log('Employee data:', employee);
    console.log('Employee schedule:', employee.schedule);
    
    // Get bookings from the employee's schedule
    const employeeSchedule = employee.schedule as any;
    const dateBookings = employeeSchedule?.bookings?.[dateStr] || {};
    
    console.log('Date:', dateStr);
    console.log('Schedule:', employeeSchedule);
    console.log('Found bookings:', dateBookings);
    
    // Process bookings for this date
    const activeBookings = Object.values(dateBookings)
      .filter((booking: any) => ['pending', 'confirmed'].includes(booking.status))
      .map((booking: any) => ({
        start: booking.timeSlot.start,
        end: booking.timeSlot.end,
        duration: booking.duration || 0,
        status: booking.status
      }));
      
    // We only care about the time slots for availability, not what service was booked
    
    console.log('Active bookings:', activeBookings);

    console.log('Processing schedule for date:', date);
    console.log('Active bookings:', activeBookings);
    
    // For each time slot in the schedule, check if it's completely free
    let availableTimeSlots: TimeSlot[] = [];

    // For today, we need to consider current time
    const now = new Date();
    const isToday = date.getDate() === now.getDate() && 
                   date.getMonth() === now.getMonth() && 
                   date.getFullYear() === now.getFullYear();
    const currentMinutes = isToday ? now.getHours() * 60 + now.getMinutes() : 0;

    // Process each time slot
    daySchedule.timeSlots.forEach(slot => {
      const slotStart = this.timeToMinutes(slot.start);
      const slotEnd = this.timeToMinutes(slot.end);

      // Skip slots that have already passed today
      if (isToday && slotStart <= currentMinutes) {
        console.log('Skipping past slot:', `${slot.start} - ${slot.end}`);
        return;
      }

      // Skip slots that are too short for the required duration
      if (requiredDuration && (slotEnd - slotStart) < requiredDuration) {
        console.log('Skipping slot too short:', {
          slot: `${slot.start} - ${slot.end}`,
          duration: slotEnd - slotStart,
          required: requiredDuration
        });
        return;
      }

      console.log('Checking slot:', {
        slot: `${slot.start} - ${slot.end}`,
        slotStartMinutes: slotStart,
        slotEndMinutes: slotEnd
      });

      // Check if this slot overlaps with any booking
      const overlappingBookings = activeBookings.filter(booking => {
        const bookingStart = this.timeToMinutes(booking.start);
        const bookingEnd = this.timeToMinutes(booking.end);

        // A booking overlaps if it starts before the slot ends AND ends after the slot starts
        const hasOverlap = bookingStart < slotEnd && bookingEnd > slotStart;

        if (hasOverlap) {
          console.log('Found overlapping booking:', {
            booking: `${booking.start} - ${booking.end}`,
            bookingStartMinutes: bookingStart,
            bookingEndMinutes: bookingEnd
          });
        }

        return hasOverlap;
      });

      if (overlappingBookings.length === 0) {
        console.log('Slot is available:', `${slot.start} - ${slot.end}`);
        availableTimeSlots.push(slot);
      } else {
        console.log('Slot is not available due to overlapping bookings:', overlappingBookings);
      }
    });

    console.log('Available time slots:', availableTimeSlots);

    // Filter out slots that are too short (less than 15 minutes)
    availableTimeSlots = availableTimeSlots.filter(slot => {
      const duration = this.timeToMinutes(slot.end) - this.timeToMinutes(slot.start);
      return duration >= 15;
    });

    // Sort slots by start time
    availableTimeSlots.sort((a, b) => 
      this.timeToMinutes(a.start) - this.timeToMinutes(b.start)
    );

    return {
      isWorking: daySchedule.isWorking,
      timeSlots: availableTimeSlots
    };
  }

  /**
   * Check if an employee is available on a specific date
   */
  static isAvailableOnDate(employee: Employee, date: Date): boolean {
    if (!employee.active) return false;

    const schedule = this.getScheduleForDate(employee, date);
    if (!schedule) return false;

    return schedule.isWorking && schedule.timeSlots.length > 0;
  }

  /**
   * Find any schedule exception for a specific date
   */
  private static findException(employee: Employee, date: Date): any | null {
    const fbSchedule = employee.schedule as unknown as FirebaseSchedule;
    if (!fbSchedule.exceptions) return null;

    return fbSchedule.exceptions.find(ex => {
      const startDate = new Date(ex.startDate);
      const endDate = new Date(ex.endDate);
      const checkDate = new Date(date);
      checkDate.setHours(0, 0, 0, 0);
      
      return checkDate >= startDate && checkDate <= endDate;
    }) || null;
  }

  /**
   * Format a date as YYYY-MM-DD
   */
  private static formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  private static timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  private static minutesToTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }

  /**
   * Get the next available date for an employee starting from a given date
   */
  static getNextAvailableDate(employee: Employee, startDate: Date): Date | null {
    const maxDays = 60; // Don't look further than 60 days
    let currentDate = new Date(startDate);

    for (let i = 0; i < maxDays; i++) {
      if (this.isAvailableOnDate(employee, currentDate)) {
        return currentDate;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return null;
  }

  /**
   * Check if a date should be disabled in the calendar
   */
  static shouldDisableDate(employee: Employee | null, date: Date): boolean {
    // If no employee selected, enable all dates
    if (!employee) return false;

    // Don't allow dates in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return true;

    // Check employee availability
    return !this.isAvailableOnDate(employee, date);
  }
}
