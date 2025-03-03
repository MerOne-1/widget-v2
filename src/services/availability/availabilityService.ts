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
      .filter((booking: any) => {
        // Only consider pending and confirmed bookings
        const validStatus = ['pending', 'confirmed'].includes(booking.status);
        // Make sure the booking has valid time slot data
        const hasValidTimeSlot = booking.timeSlot && booking.timeSlot.start && booking.timeSlot.end;
        return validStatus && hasValidTimeSlot;
      })
      .map((booking: any) => {
        const start = booking.timeSlot.start;
        const end = booking.timeSlot.end;
        const duration = booking.duration || (
          // If duration is missing, calculate it from start and end times
          this.timeToMinutes(end) - this.timeToMinutes(start)
        );
        
        return {
          start,
          end,
          duration,
          status: booking.status
        };
      });
      
    console.log('Processed active bookings:', activeBookings);
    
    console.log('Active bookings:', activeBookings);

    console.log('Processing schedule for date:', date);
    console.log('Active bookings:', activeBookings);
    
    // For today, we need to consider current time
    const now = new Date();
    const isToday = date.getDate() === now.getDate() && 
                   date.getMonth() === now.getMonth() && 
                   date.getFullYear() === now.getFullYear();
    const currentMinutes = isToday ? now.getHours() * 60 + now.getMinutes() : 0;

    // Process each time slot to generate 15-minute intervals
    const availableIntervals: string[] = [];

    // Process each time slot
    for (const slot of daySchedule.timeSlots) {
      const slotStart = this.timeToMinutes(slot.start);
      const slotEnd = this.timeToMinutes(slot.end);

      // Skip slots that have already passed today
      if (isToday && slotStart <= currentMinutes) {
        console.log('Skipping past slot:', `${slot.start} - ${slot.end}`);
        continue;
      }

      // Skip slots that are too short for the required duration
      if (requiredDuration && (slotEnd - slotStart) < requiredDuration) {
        console.log('Skipping slot too short:', {
          slot: `${slot.start} - ${slot.end}`,
          duration: slotEnd - slotStart,
          required: requiredDuration
        });
        continue;
      }

      // Generate 15-minute intervals
      let intervalStart = slotStart;
      while (intervalStart + (requiredDuration || 15) <= slotEnd) {
        const intervalEnd = intervalStart + (requiredDuration || 15);
        const startTime = this.minutesToTime(intervalStart);

        // Check if this interval overlaps with any booking
        const hasOverlap = activeBookings.some(booking => {
          const bookingStart = this.timeToMinutes(booking.start);
          const bookingEnd = this.timeToMinutes(booking.end);

          return (
            (bookingStart <= intervalStart && bookingEnd > intervalStart) || // Booking starts before and ends during/after
            (bookingStart >= intervalStart && bookingStart < intervalEnd) // Booking starts during
          );
        });

        if (!hasOverlap) {
          availableIntervals.push(startTime);
        }

        intervalStart += 15; // Move to next 15-minute interval
      }
    }

    // Sort intervals by start time
    availableIntervals.sort((a, b) => this.timeToMinutes(a) - this.timeToMinutes(b));

    return {
      isWorking: daySchedule.isWorking,
      timeSlots: availableIntervals
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
