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

export interface TimeSlot {
  start: string; // HH:mm
  end: string; // HH:mm
}

export interface DaySchedule {
  isWorking: boolean;
  timeSlots: TimeSlot[];
}

export interface WeeklySchedule {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface ScheduleException {
  id: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  type: 'holiday' | 'custom';
  note?: string;
  timeSlots: TimeSlot[];
}

export interface EmployeeSchedule {
  weeklySchedule: WeeklySchedule;
  exceptions?: ScheduleException[];
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  services: string[]; // Service IDs
  active: boolean;
  schedule: EmployeeSchedule;
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
