import { Employee } from '../api/types';
import { AvailabilityService } from './availabilityService';

interface AvailabilityCache {
  [employeeId: string]: {
    [dateStr: string]: boolean;
  };
}

export class AvailabilityCacheService {
  private static cache: AvailabilityCache = {};
  private static isPreloading = false;
  private static preloadPromise: Promise<void> | null = null;

  static async preloadAvailability(employee: Employee, startDate: Date, months: number = 3): Promise<void> {
    if (this.isPreloading) {
      return this.preloadPromise!;
    }

    this.isPreloading = true;
    this.preloadPromise = this.doPreload(employee, startDate, months);
    await this.preloadPromise;
    this.isPreloading = false;
  }

  private static async doPreload(employee: Employee, startDate: Date, months: number): Promise<void> {
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + months);

    const currentDate = new Date(startDate);
    currentDate.setHours(0, 0, 0, 0);

    // Initialize cache for this employee
    if (!this.cache[employee.id]) {
      this.cache[employee.id] = {};
    }

    // Check each day until we reach the end date
    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split('T')[0];
      
      // Skip if we already have this date in cache
      if (this.cache[employee.id][dateStr] === undefined) {
        const schedule = await AvailabilityService.getScheduleForDate(employee, new Date(currentDate));
        this.cache[employee.id][dateStr] = schedule?.isWorking && (schedule?.timeSlots.length ?? 0) > 0;
      }

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  static isDateAvailable(employeeId: string, date: Date): boolean | null {
    const dateStr = date.toISOString().split('T')[0];
    if (!this.cache[employeeId] || this.cache[employeeId][dateStr] === undefined) {
      return null; // Not cached yet
    }
    return this.cache[employeeId][dateStr];
  }

  static clearCache() {
    this.cache = {};
  }
}
