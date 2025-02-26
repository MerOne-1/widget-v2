import { Employee, DaySchedule, ScheduleException, Shift, Booking } from '../api/types';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

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

    // Check existing bookings for this date
    const dateStr = this.formatDate(date);
    const bookingsRef = collection(db, 'bookings');
    const q = query(
      bookingsRef,
      where('employeeId', '==', employee.id),
      where('date', '==', dateStr),
      where('status', 'in', ['pending', 'confirmed'])
    );

    const bookingsSnapshot = await getDocs(q);
    const bookings = bookingsSnapshot.docs.map(doc => doc.data() as Booking);

    // Filter out time slots that overlap with existing bookings
    const availableTimeSlots = schedule.timeSlots.filter(slot => {
      const slotStart = this.timeToMinutes(slot.start);
      const slotEnd = this.timeToMinutes(slot.end);

      return !bookings.some(booking => {
        const bookingStart = this.timeToMinutes(booking.timeSlot.start);
        const bookingEnd = bookingStart + booking.totalDuration;

        // Check if the slots overlap
        return !(slotEnd <= bookingStart || slotStart >= bookingEnd);
      });
    });

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
