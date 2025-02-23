import { FirebaseBookingService } from '../firebase/bookingService';
import { Service, ServiceCategory, Employee, Booking } from './types';

class FirebaseApi {
  private service: FirebaseBookingService;

  constructor() {
    this.service = new FirebaseBookingService();
  }

  async getServiceCategories(): Promise<ServiceCategory[]> {
    return this.service.getServiceCategories();
  }

  async getServices(categoryId?: string): Promise<Service[]> {
    return this.service.getServices(categoryId);
  }

  async getEmployees(serviceId?: string): Promise<Employee[]> {
    return this.service.getEmployees(serviceId);
  }

  async getAvailability(params: {
    employeeId: string;
    serviceId: string;
    date: string;
  }): Promise<string[]> {
    return this.service.getAvailability(params);
  }

  async createBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Booking> {
    return this.service.createBooking(booking);
  }
}

// Create and export a singleton instance
export const firebaseApi = new FirebaseApi();
