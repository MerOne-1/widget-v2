import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/config';
import { WidgetData } from '../types/widgetData';
import { ServiceCategory } from '../types/services';
import { Employee } from '../types/employees';

export class WidgetDataService {
  private static COLLECTION_NAME = 'widgetData';
  private static DOCUMENT_ID = 'latest';
  private static widgetDataRef = doc(db, this.COLLECTION_NAME, this.DOCUMENT_ID);
  private static listeners: Map<string, () => void> = new Map();

  /**
   * Get all widget data in a single query
   */
  static async getWidgetData(): Promise<WidgetData | null> {
    console.log('Fetching widget data from:', this.widgetDataRef.path);
    
    try {
      const snapshot = await getDoc(this.widgetDataRef);
      if (!snapshot.exists()) {
        console.error('No widget data found at path:', this.widgetDataRef.path);
        return null;
      }

      const data = snapshot.data() as WidgetData;
      console.log('Found data at path:', this.widgetDataRef.path);
      console.log('Raw Firestore data:', data);
      
      // SPECIAL DEBUG: Look for March 27 bookings and Paola
      console.log('SPECIAL DEBUG: Professionals with bookings:', Object.keys(data.professionals || {}));
      
      // Look for any professional named Paola
      const paolaData = Object.values(data.professionals || {}).find(p => p.name === 'Paola');
      if (paolaData) {
        console.log('FOUND PAOLA:', paolaData.id, paolaData.name);
        console.log('PAOLA FULL DATA:', paolaData);
        
        // Check if bookings property exists
        if (paolaData.bookings) {
          console.log('PAOLA BOOKING DATES:', Object.keys(paolaData.bookings));
          
          // Try different date formats for March 27
          const possibleDateFormats = [
            '2025-03-27',
            '2025-3-27',
            '27-03-2025',
            '27-3-2025',
            '03-27-2025',
            '3-27-2025',
            '2025/03/27',
            '2025/3/27',
            '27/03/2025',
            '27/3/2025',
            '03/27/2025',
            '3/27/2025'
          ];
          
          let foundBooking = false;
          
          for (const dateFormat of possibleDateFormats) {
            const bookings = paolaData.bookings[dateFormat];
            if (bookings) {
              console.log(`FOUND BOOKINGS FOR DATE FORMAT ${dateFormat}:`, bookings);
              foundBooking = true;
              
              // Get detailed information about each booking
              Object.entries(bookings).forEach(([bookingId, booking]) => {
                console.log(`Booking ${bookingId}:`, booking);
              });
            }
          }
          
          // If no booking found with the specific formats, search all dates for any morning bookings
          if (!foundBooking) {
            console.log('SEARCHING ALL DATES FOR MORNING BOOKINGS');
            Object.entries(paolaData.bookings).forEach(([date, bookings]) => {
              Object.entries(bookings).forEach(([bookingId, booking]) => {
                // Check if this is a morning booking (before noon)
                let startTime = '';
                if (typeof booking.timeSlot === 'string') {
                  startTime = booking.timeSlot.split('-')[0].trim();
                } else if (booking.timeSlot && booking.timeSlot.start) {
                  startTime = booking.timeSlot.start;
                }
                
                if (startTime && startTime.startsWith('9:') || startTime.startsWith('09:') || startTime.startsWith('10:')) {
                  console.log(`FOUND MORNING BOOKING ON ${date}:`, {
                    bookingId,
                    timeSlot: booking.timeSlot,
                    status: booking.status,
                    date
                  });
                }
              });
            });
          }
        } else {
          console.log('PAOLA HAS NO BOOKINGS PROPERTY');
          // Check if bookings might be under a different property
          console.log('ALL PROPERTIES OF PAOLA:', Object.keys(paolaData));
        }
      } else {
        // Look for any professional with March 27 bookings or morning bookings
        console.log('PAOLA NOT FOUND, SEARCHING ALL PROFESSIONALS');
        Object.values(data.professionals || {}).forEach(professional => {
          console.log(`Checking professional: ${professional.name}`);
          if (professional.bookings) {
            Object.entries(professional.bookings).forEach(([date, bookings]) => {
              Object.entries(bookings).forEach(([bookingId, booking]) => {
                // Check if this is a morning booking (before noon)
                let startTime = '';
                if (typeof booking.timeSlot === 'string') {
                  startTime = booking.timeSlot.split('-')[0].trim();
                } else if (booking.timeSlot && booking.timeSlot.start) {
                  startTime = booking.timeSlot.start;
                }
                
                if (startTime && (startTime.startsWith('9:') || startTime.startsWith('09:') || startTime.startsWith('10:'))) {
                  console.log(`FOUND MORNING BOOKING FOR ${professional.name} ON ${date}:`, {
                    bookingId,
                    timeSlot: booking.timeSlot,
                    status: booking.status,
                    date
                  });
                }
              });
            });
          }
        });
      }
      
      if (!data.serviceCategories) {
        console.error('No serviceCategories found in widget data');
        console.log('Available fields:', Object.keys(data));
      }

      return data;
    } catch (error) {
      console.error('Error fetching widget data:', error);
      return null;
    }
  }

  /**
   * Get service categories with their services
   */
  static async getServiceCategories(): Promise<ServiceCategory[]> {
    const data = await this.getWidgetData();
    if (!data) {
      console.error('No widget data available');
      return [];
    }

    console.log('Raw widget data structure:', {
      hasServiceCategories: !!data.serviceCategories,
      serviceCategories: data.serviceCategories,
      dataKeys: Object.keys(data)
    });

    // Check if serviceCategories is an array
    if (Array.isArray(data.serviceCategories)) {
      console.log('serviceCategories is an array');
      const categories = data.serviceCategories;
      return categories
        .filter(category => category.active)
        .map(this.mapCategory)
        .sort((a, b) => a.order - b.order);
    }

    // Check if serviceCategories is an object
    if (typeof data.serviceCategories === 'object' && data.serviceCategories !== null) {
      console.log('serviceCategories is an object');
      const categories = Object.values(data.serviceCategories);
      return categories
        .filter(category => category.active)
        .map(this.mapCategory)
        .sort((a, b) => a.order - b.order);
    }

    console.error('serviceCategories is neither an array nor an object:', data.serviceCategories);
    return [];
  }

  private static mapCategory(category: any): ServiceCategory {
    console.log('Mapping category:', category);
    
    let services = [];
    if (Array.isArray(category.services)) {
      services = category.services;
    } else if (typeof category.services === 'object' && category.services !== null) {
      services = Object.values(category.services);
    }

    console.log(`Services for category ${category.name}:`, services);

    const mappedServices = services
      .filter(service => service.active)
      .map(service => ({
        id: service.id,
        name: service.name,
        duration: service.duration || 60,
        price: service.price || 0,
        description: service.description || '',
        order: service.order || 0,
        active: service.active,
        categoryId: category.id
      }));

    return {
      id: category.id,
      name: category.name,
      description: category.description || '',
      order: category.order || 0,
      active: category.active,
      services: mappedServices
    };
  }

  /**
   * Get all active employees
   */
  static async getEmployees(): Promise<Employee[]> {
    console.log('Getting widget data...');
    const data = await this.getWidgetData();
    if (!data) {
      console.log('No widget data found');
      return [];
    }
    
    console.log('Raw professionals data:', data.professionals);

    console.log('Raw professionals data:', JSON.stringify(data.professionals, null, 2));
    
    return Object.values(data.professionals)
      .filter(professional => professional.active)
      .map(professional => {
        // Convert bookings to the expected format
        const bookings: { [date: string]: any[] } = {};
        
        // Process each date's bookings
        Object.entries(professional.bookings || {}).forEach(([date, dateBookings]) => {
          if (!dateBookings) return;
          
          console.log(`Processing bookings for ${professional.name} on ${date}:`, dateBookings);

          // Convert object of bookings to array and filter out invalid ones
          bookings[date] = Object.values(dateBookings)
            .filter(booking => {
              console.log('Processing booking:', booking);
              
              // Check if the timeSlot is a string or an object
              let timeSlotObj;
              if (typeof booking.timeSlot === 'string') {
                console.log('Found string timeSlot:', booking.timeSlot);
                const timeSlotParts = booking.timeSlot.split('-');
                if (timeSlotParts.length !== 2) {
                  console.warn('Skipping booking with invalid string timeSlot format:', booking);
                  return false;
                }
                
                timeSlotObj = {
                  start: timeSlotParts[0].trim(),
                  end: timeSlotParts[1].trim()
                };
                
                // Update the booking with parsed timeSlot for consistency
                booking.timeSlot = timeSlotObj;
                console.log('Converted string timeSlot to object:', timeSlotObj);
              } else {
                timeSlotObj = booking.timeSlot;
              }
              
              // Must have valid timeSlot
              if (!timeSlotObj || !timeSlotObj.start || !timeSlotObj.end) {
                console.warn('Skipping booking with invalid timeSlot:', booking);
                return false;
              }

              // Must be pending or confirmed
              if (!['pending', 'confirmed'].includes(booking.status)) {
                console.warn('Skipping booking with invalid status:', booking);
                return false;
              }

              // For legacy bookings without duration, calculate it from timeSlot
              if (!booking.duration || booking.duration <= 0) {
                const [startHour, startMinute] = timeSlotObj.start.split(':').map(Number);
                const [endHour, endMinute] = timeSlotObj.end.split(':').map(Number);
                const startMinutes = startHour * 60 + startMinute;
                const endMinutes = endHour * 60 + endMinute;
                booking.duration = endMinutes - startMinutes;
                console.log('Calculated duration for legacy booking:', {
                  timeSlot: timeSlotObj,
                  calculatedDuration: booking.duration
                });
              }

              return true;
            })
            .map(booking => {
              const result = {
                start: booking.timeSlot.start,
                end: booking.timeSlot.end,
                duration: booking.duration,
                status: booking.status,
                id: booking.id || `booking-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
              };
              console.log('Transformed booking:', result);
              return result;
            });
        });

        console.log('Processing professional:', professional);
        console.log('Original schedule:', professional.schedule);
        
        // Get the weekly schedule directly - it's already in the correct format
        const weeklySchedule = professional.schedule.weeklySchedule || {};

        const transformedSchedule = {
          weeklySchedule,
          bookings // Add the processed bookings to the schedule
        };

        console.log('Professional schedule:', professional.schedule);
        console.log('Transformed schedule:', transformedSchedule);
        
        // Detailed logging of the transformed employee with bookings
        console.log('Transformed employee with bookings:', {
          employeeName: professional.name,
          bookingDates: Object.keys(transformedSchedule.bookings || {}),
          sampleBookings: Object.entries(transformedSchedule.bookings || {}).slice(0, 2)
        });
        
        return {
          id: professional.id,
          name: professional.name,
          role: professional.role,
          active: professional.active,
          services: professional.services,
          schedule: transformedSchedule
        };
      });
  }

  /**
   * Subscribe to real-time updates
   */
  static subscribeToUpdates(callback: (data: WidgetData | null) => void): () => void {
    const unsubscribe = onSnapshot(this.widgetDataRef, (doc) => {
      const data = doc.data() as WidgetData | undefined;
      callback(data || null);
    });

    // Store the unsubscribe function
    const listenerId = Math.random().toString(36).substring(7);
    this.listeners.set(listenerId, unsubscribe);

    // Return a function to unsubscribe
    return () => {
      unsubscribe();
      this.listeners.delete(listenerId);
    };
  }

  /**
   * Clean up all listeners
   */
  static cleanup() {
    this.listeners.forEach(unsubscribe => unsubscribe());
    this.listeners.clear();
  }

  /**
   * Create a DaySchedule object from a schedule entry
   */
  private static createDaySchedule(schedule: { start: string; end: string; break?: { start: string; end: string; } } | undefined): { isWorking: boolean; timeSlots: { start: string; end: string; }[]; } {
    console.log('Creating day schedule from:', schedule);
    
    if (!schedule || !schedule.start || !schedule.end) {
      console.log('No valid schedule provided, returning not working');
      return {
        isWorking: false,
        timeSlots: []
      };
    }

    const timeSlots: { start: string; end: string; }[] = [];

    // If there's a break, create two slots: before and after break
    if (schedule.break) {
      if (schedule.start < schedule.break.start) {
        timeSlots.push({
          start: schedule.start,
          end: schedule.break.start
        });
      }
      if (schedule.break.end < schedule.end) {
        timeSlots.push({
          start: schedule.break.end,
          end: schedule.end
        });
      }
    } else {
      // No break, just one continuous slot
      timeSlots.push({
        start: schedule.start,
        end: schedule.end
      });
    }

    console.log('Created time slots:', timeSlots);

    return {
      isWorking: timeSlots.length > 0,
      timeSlots
    };
  }

  /**
   * Calculate the end time for a booking based on start time (HH:mm format) and duration in minutes
   */
  private static calculateEndTime(startTime: string, duration: number = 60): string {
    try {
      const [hours, minutes] = startTime.split(':').map(Number);
      
      if (isNaN(hours) || isNaN(minutes)) {
        console.error('Invalid time format:', startTime);
        return '00:00';
      }

      const totalMinutes = hours * 60 + minutes + duration;
      const endHours = Math.floor(totalMinutes / 60) % 24; // Handle wrap around to next day
      const endMinutes = totalMinutes % 60;
      
      return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
    } catch (error) {
      console.error('Error calculating end time:', error, { startTime, duration });
      return '00:00';
    }
    
    const endHours = Math.floor(totalMinutes / 60);
    const endMinutes = totalMinutes % 60;
    
    return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  }
}
