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

export interface Booking {
  id: string;
  serviceId: string;
  employeeId: string;
  clientInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    comments?: string;
  };
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}
