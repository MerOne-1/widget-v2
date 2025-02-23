import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  Timestamp,
  doc,
  getDoc
} from 'firebase/firestore';
import { db } from './config';
import { 
  Service, 
  ServiceCategory, 
  Employee, 
  Booking 
} from '../api/types';

export class FirebaseBookingService {
  // Service Categories
  async getServiceCategories(): Promise<ServiceCategory[]> {
    const categoriesRef = collection(db, 'serviceCategories');
    const snapshot = await getDocs(categoriesRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ServiceCategory));
  }

  // Services
  async getServices(categoryId?: string): Promise<Service[]> {
    const servicesRef = collection(db, 'services');
    const q = categoryId 
      ? query(servicesRef, where('categoryId', '==', categoryId))
      : servicesRef;
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Service));
  }

  // Employees
  async getEmployees(serviceId?: string): Promise<Employee[]> {
    const employeesRef = collection(db, 'employees');
    const snapshot = await getDocs(employeesRef);
    const employees = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Employee));

    if (serviceId) {
      return employees.filter(emp => emp.services.includes(serviceId));
    }
    return employees;
  }

  // Availability
  async getAvailability(params: {
    employeeId: string;
    serviceId: string;
    date: string;
  }): Promise<string[]> {
    // Get employee schedule
    const employeeDoc = await getDoc(doc(db, 'employees', params.employeeId));
    if (!employeeDoc.exists()) return [];

    const employee = employeeDoc.data() as Employee;
    const dayOfWeek = new Date(params.date).getDay().toString();
    const schedule = employee.schedule[dayOfWeek];
    
    if (!schedule) return [];

    // Get existing bookings
    const bookingsRef = collection(db, 'bookings');
    const q = query(
      bookingsRef,
      where('employeeId', '==', params.employeeId),
      where('date', '==', params.date)
    );
    const bookingsSnapshot = await getDocs(q);
    const bookedSlots = bookingsSnapshot.docs.map(doc => doc.data().time);

    // Generate available slots
    const slots: string[] = [];
    const [startHour, startMinute] = schedule.start.split(':').map(Number);
    const [endHour, endMinute] = schedule.end.split(':').map(Number);
    
    let currentHour = startHour;
    let currentMinute = startMinute;

    while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
      const timeSlot = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
      if (!bookedSlots.includes(timeSlot)) {
        slots.push(timeSlot);
      }
      currentMinute += 30;
      if (currentMinute >= 60) {
        currentHour += 1;
        currentMinute = 0;
      }
    }

    return slots;
  }

  // Bookings
  async createBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Booking> {
    const bookingData = {
      ...booking,
      status: 'pending',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    const docRef = await addDoc(collection(db, 'bookings'), bookingData);
    return {
      id: docRef.id,
      ...bookingData
    } as Booking;
  }
}
