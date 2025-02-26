export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  categoryId: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  services: string[]; // Service IDs
  schedule: {
    [key: string]: { // day of week (0-6)
      start: string; // HH:mm
      end: string; // HH:mm
    };
  };
}

export interface Availability {
  employeeId: string;
  date: string; // YYYY-MM-DD
  slots: string[]; // HH:mm
}

export interface TimeSlot {
  start: string; // HH:mm
  end: string; // HH:mm
}

export interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  comments?: string;
}

export interface BookingService {
  id: string;
  name: string;
  duration: number;
  price: number;
}

export interface Booking {
  id: string;
  services: BookingService[]; // All selected services
  employeeId: string;
  employeeName: string; // Store employee name for reference
  clientInfo: ClientInfo;
  date: string; // YYYY-MM-DD
  timeSlot: TimeSlot; // Using the same format as employee schedule
  totalDuration: number; // Total duration in minutes
  totalPrice: number; // Total price of all services
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}
