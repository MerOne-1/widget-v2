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
    
    // IMPORTANT: Handle Spanish date format
    const spanishDayNames = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const spanishMonthNames = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayName = spanishDayNames[date.getDay()];
    
    // Create possible Spanish date formats
    const spanishDateFormats = [
      `${dayName}, ${day} de ${spanishMonthNames[month]} de ${year}`,
      `${day} de ${spanishMonthNames[month]} de ${year}`
    ];
    
    console.log(`Looking for bookings on ${dateStr} for employee ${employee.name}`);
    console.log('Checking these date formats:', {
      iso: dateStr,
      spanishFormats: spanishDateFormats
    });
    console.log('Employee schedule structure:', {
      type: typeof employeeSchedule,
      hasBookings: !!employeeSchedule?.bookings,
      bookingDates: employeeSchedule?.bookings ? Object.keys(employeeSchedule.bookings) : [],
      bookingsType: employeeSchedule?.bookings ? typeof employeeSchedule.bookings : 'undefined'
    });
    
    // Try to find bookings using different date formats
    let dateBookings = employeeSchedule?.bookings?.[dateStr] || {};
    
    // If no bookings found with ISO format, try Spanish formats
    if (Object.keys(dateBookings).length === 0 && employeeSchedule?.bookings) {
      for (const spanishDate of spanishDateFormats) {
        console.log(`Checking for Spanish date format: ${spanishDate}`);
        const bookingsForSpanishDate = employeeSchedule.bookings[spanishDate];
        if (bookingsForSpanishDate) {
          console.log(`Found bookings using Spanish format: ${spanishDate}`, bookingsForSpanishDate);
          
          // If the bookings are in array format (as seen in the console)
          if (Array.isArray(bookingsForSpanishDate)) {
            dateBookings = {};
            bookingsForSpanishDate.forEach((booking, index) => {
              dateBookings[`booking-${index}`] = booking;
            });
          } else {
            dateBookings = bookingsForSpanishDate;
          }
          break;
        }
      }
    }
    
    console.log('Date:', dateStr);
    console.log('Schedule:', employeeSchedule);
    console.log(`Found bookings for date:`, {
      count: Object.keys(dateBookings).length,
      bookingsData: dateBookings
    });
    
    // Process bookings for this date
    let activeBookings = [];
    
    if (Array.isArray(dateBookings)) {
      console.log('Processing array-format bookings');
      activeBookings = dateBookings.filter((booking: any) => {
        // Only consider pending and confirmed bookings
        const validStatus = ['pending', 'confirmed'].includes(booking.status);
        return validStatus;
      });
    } else {
      console.log('Processing object-format bookings');
      activeBookings = Object.values(dateBookings)
        .filter((booking: any) => {
          // Only consider pending and confirmed bookings
          const validStatus = ['pending', 'confirmed'].includes(booking.status);
          // Make sure the booking has valid time slot data (or check format later)
          return validStatus;
        });
    }
    
    console.log('Active bookings before processing:', activeBookings);
    
    // Map bookings to a consistent format
    activeBookings = activeBookings.map((booking: any) => {
        console.log('Processing booking for mapping:', booking);
        
        // Handle different formats of timeSlot
        let start, end;
        
        if (booking.start && booking.end) {
          // Already in the right format
          start = booking.start;
          end = booking.end;
        } else if (typeof booking.timeSlot === 'string') {
          // Handle string timeSlot format like "09:00 - 10:50"
          const parts = booking.timeSlot.split('-');
          if (parts.length === 2) {
            start = parts[0].trim();
            end = parts[1].trim();
          } else {
            console.warn('Invalid booking timeSlot string format:', booking.timeSlot);
            // Default values to avoid errors
            start = '00:00';
            end = '00:00';
          }
        } else if (booking.timeSlot && booking.timeSlot.start && booking.timeSlot.end) {
          // Handle object timeSlot format
          start = booking.timeSlot.start;
          end = booking.timeSlot.end;
        } else {
          console.warn('Booking has no valid time information:', booking);
          // Default values to avoid errors
          start = '00:00';
          end = '00:00';
        }
        
        const duration = booking.duration || (
          // If duration is missing, calculate it from start and end times
          this.timeToMinutes(end) - this.timeToMinutes(start)
        );
        
        console.log(`Processing booking with time slot: ${start}-${end}, duration: ${duration}`);
        
        return {
          start,
          end,
          duration,
          status: booking.status
        };
      });
      
    console.log(`Processed ${activeBookings.length} active bookings:`, activeBookings);
      
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
        console.log(`Checking overlap for interval ${startTime}-${this.minutesToTime(intervalEnd)}`);
        
        const hasOverlap = activeBookings.some(booking => {
          console.log('Checking booking for overlap:', booking);
          
          // Make sure booking has valid start and end times
          let bookingStart = 0;
          let bookingEnd = 0;
          let bookingStartStr = '';
          let bookingEndStr = '';

          if (booking.start && booking.end) {
            bookingStart = this.timeToMinutes(booking.start);
            bookingEnd = this.timeToMinutes(booking.end);
            bookingStartStr = booking.start;
            bookingEndStr = booking.end;
          } else if (typeof booking.timeSlot === 'string') {
            // Handle string timeSlot format like "09:00 - 10:00"
            const parts = booking.timeSlot.split('-');
            if (parts.length === 2) {
              bookingStartStr = parts[0].trim();
              bookingEndStr = parts[1].trim();
              bookingStart = this.timeToMinutes(bookingStartStr);
              bookingEnd = this.timeToMinutes(bookingEndStr);
            } else {
              console.warn('Invalid booking timeSlot format:', booking.timeSlot);
              return false;
            }
          } else if (booking.timeSlot && booking.timeSlot.start && booking.timeSlot.end) {
            // Handle object timeSlot format
            bookingStartStr = booking.timeSlot.start;
            bookingEndStr = booking.timeSlot.end;
            bookingStart = this.timeToMinutes(bookingStartStr);
            bookingEnd = this.timeToMinutes(bookingEndStr);
          } else {
            console.warn('Booking has no valid time information:', booking);
            return false;
          }

          console.log('Converted times for overlap check:', {
            bookingStartTime: bookingStartStr,
            bookingEndTime: bookingEndStr,
            intervalStartTime: startTime,
            intervalEndTime: this.minutesToTime(intervalEnd),
            bookingStartMinutes: bookingStart,
            bookingEndMinutes: bookingEnd,
            intervalStartMinutes: intervalStart,
            intervalEndMinutes: intervalEnd
          });

          // More comprehensive overlap check
          const overlaps = (
            // Case 1: Interval starts during booking
            (intervalStart >= bookingStart && intervalStart < bookingEnd) ||
            // Case 2: Interval ends during booking
            (intervalEnd > bookingStart && intervalEnd <= bookingEnd) ||
            // Case 3: Interval contains booking
            (intervalStart <= bookingStart && intervalEnd >= bookingEnd) ||
            // Case 4: Booking contains interval
            (bookingStart <= intervalStart && bookingEnd >= intervalEnd)
          );
          
          if (overlaps) {
            console.log(`Overlap detected: interval ${startTime}-${this.minutesToTime(intervalEnd)} overlaps with booking ${bookingStartStr}-${bookingEndStr}`);
          }
          
          return overlaps;
        });

        if (!hasOverlap) {
          console.log(`Adding available interval: ${startTime}`);
          availableIntervals.push(startTime);
        } else {
          console.log(`Skipping unavailable interval: ${startTime}`);
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
