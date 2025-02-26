import { Employee, DaySchedule, ScheduleException, Shift } from '../api/types';

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
  static getScheduleForDate(employee: Employee, date: Date): DaySchedule | null {
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

    return fbSchedule.weeklySchedule[dayOfWeek];
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
