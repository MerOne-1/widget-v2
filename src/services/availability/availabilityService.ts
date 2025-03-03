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
  static async getScheduleForDate(employee: Employee, date: Date): Promise<DaySchedule | null> {
    const fbSchedule = employee.schedule as unknown as FirebaseSchedule;
    
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
    if (!fbSchedule.weeklySchedule || !fbSchedule.weeklySchedule[dayOfWeek]) {
      return {
        isWorking: false,
        timeSlots: []
      };
    }

    const schedule = fbSchedule.weeklySchedule[dayOfWeek];
    if (!schedule.isWorking) {
      return schedule;
    }

    // Get bookings for this date from the employee data
    const dateStr = this.formatDate(date);
    console.log('Checking bookings for date:', dateStr);
    console.log('Employee data:', employee);
    console.log('Employee schedule:', employee.schedule);
    
    // Get bookings from the employee's schedule
    const fbSchedule = employee.schedule as any;
    const bookings = fbSchedule?.bookings?.[dateStr] || [];
    
    console.log('Found bookings:', bookings);
    
    const activeBookings = bookings
      .filter((booking: any) => ['pending', 'confirmed'].includes(booking.status))
      .map((booking: any) => ({
        ...booking,
        start: booking.start || booking.timeSlot?.start,
        end: booking.end || booking.timeSlot?.end || 
              this.minutesToTime(this.timeToMinutes(booking.start || booking.timeSlot?.start) + (booking.duration || 60))
      }));
    
    console.log('Active bookings:', activeBookings);

    // Split time slots based on bookings
    let availableTimeSlots: TimeSlot[] = [];

    schedule.timeSlots.forEach(slot => {
      let currentSlots: TimeSlot[] = [slot];

      // Process each booking that might affect this slot
      activeBookings.forEach(booking => {
        const bookingStart = this.timeToMinutes(booking.start);
        const bookingEnd = this.timeToMinutes(booking.end);

        // Create new array of slots by splitting existing slots at booking boundaries
        const newSlots: TimeSlot[] = [];

        currentSlots.forEach(currentSlot => {
          const slotStart = this.timeToMinutes(currentSlot.start);
          const slotEnd = this.timeToMinutes(currentSlot.end);

          // If slot is completely before or after booking, keep it as is
          if (slotEnd <= bookingStart || slotStart >= bookingEnd) {
            newSlots.push(currentSlot);
            return;
          }

          // If booking starts after slot start, create a slot before booking
          if (bookingStart > slotStart) {
            newSlots.push({
              start: currentSlot.start,
              end: this.minutesToTime(bookingStart)
            });
          }

          // If booking ends before slot end, create a slot after booking
          if (bookingEnd < slotEnd) {
            newSlots.push({
              start: this.minutesToTime(bookingEnd),
              end: currentSlot.end
            });
          }
        });

        currentSlots = newSlots;
      });

      // Add all remaining slots to final result
      availableTimeSlots.push(...currentSlots);
    });

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
      isWorking: schedule.isWorking,
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
