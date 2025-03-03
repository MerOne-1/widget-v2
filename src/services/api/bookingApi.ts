import { Service, ServiceCategory, Employee, Availability, Booking } from './types';
import { services, serviceCategories, employees } from '../../data/mock';

// Interface for API configuration
interface ApiConfig {
  baseUrl?: string;
  apiKey?: string;
}

// API class that can switch between mock and real data
class BookingApi {
  private config: ApiConfig;
  private useMock: boolean;

  constructor(config: ApiConfig = {}, useMock = true) {
    this.config = config;
    this.useMock = useMock;
  }

  // Services
  async getServiceCategories(): Promise<ServiceCategory[]> {
    if (this.useMock) {
      return Promise.resolve(serviceCategories);
    }
    // Real API call will go here
    return this.get('/service-categories');
  }

  async getServices(categoryId?: string): Promise<Service[]> {
    if (this.useMock) {
      const allServices = services;
      return Promise.resolve(
        categoryId 
          ? allServices.filter(s => s.categoryId === categoryId)
          : allServices
      );
    }
    return this.get(`/services${categoryId ? `?categoryId=${categoryId}` : ''}`);
  }

  // Employees
  async getEmployees(serviceId?: string): Promise<Employee[]> {
    if (this.useMock) {
      const allEmployees = employees;
      return Promise.resolve(
        serviceId
          ? allEmployees.filter(e => e.services.includes(serviceId))
          : allEmployees
      );
    }
    return this.get(`/employees${serviceId ? `?serviceId=${serviceId}` : ''}`);
  }

  // Availability
  async getAvailability(params: {
    employeeId: string;
    serviceId: string;
    date: string;
    serviceDuration?: number;
  }): Promise<string[]> {
    if (this.useMock) {
      // Mock available slots
      const employee = employees.find(e => e.id === params.employeeId);
      if (!employee) return Promise.resolve([]);

      const dayOfWeek = new Date(params.date).getDay().toString();
      const schedule = employee.schedule[dayOfWeek];
      
      if (!schedule) return Promise.resolve([]);

      // Get the service to check its duration
      const service = services.find(s => s.id === params.serviceId);
      const serviceDuration = params.serviceDuration || (service?.duration || 30);
      
      // Generate slots based on service duration
      const slots: string[] = [];
      const [startHour, startMinute] = schedule.start.split(':').map(Number);
      const [endHour, endMinute] = schedule.end.split(':').map(Number);
      
      // Convert to minutes for easier calculation
      const startMinutes = startHour * 60 + startMinute;
      const endMinutes = endHour * 60 + endMinute;
      let currentMinutes = startMinutes;

      // Only show slots if there's enough time for the service
      while (currentMinutes + serviceDuration <= endMinutes) {
        // For today, skip past slots
        if (params.date === new Date().toISOString().split('T')[0]) {
          const now = new Date();
          const currentTime = now.getHours() * 60 + now.getMinutes();
          if (currentMinutes <= currentTime) {
            currentMinutes += 30;
            continue;
          }
        }

        const currentHour = Math.floor(currentMinutes / 60);
        const currentMinute = currentMinutes % 60;
        slots.push(`${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`);
        currentMinutes += 30;
      }

      return Promise.resolve(slots);
    }
    return this.get('/availability', params);
  }

  // Bookings
  async createBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Booking> {
    if (this.useMock) {
      const newBooking: Booking = {
        ...booking,
        id: Math.random().toString(36).substr(2, 9),
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      return Promise.resolve(newBooking);
    }
    return this.post('/bookings', booking);
  }

  // Private methods for real API calls
  private async get(endpoint: string, params?: Record<string, any>): Promise<any> {
    const url = new URL(this.config.baseUrl + endpoint);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url.toString(), {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
  }

  private async post(endpoint: string, data: any): Promise<any> {
    const response = await fetch(this.config.baseUrl + endpoint, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
  }

  private getHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      ...(this.config.apiKey && { 'Authorization': `Bearer ${this.config.apiKey}` }),
    };
  }
}

// Create and export a singleton instance
export const bookingApi = new BookingApi();

// Export the class for testing or custom initialization
export default BookingApi;
