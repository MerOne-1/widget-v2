import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/config';
import { WidgetData } from '../types/widgetData';
import { ServiceCategory } from '../types/services';
import { Employee } from '../types/employees';

export class WidgetDataService {
  private static widgetDataRef = doc(db, 'widgetData', 'latest');
  private static listeners: Map<string, () => void> = new Map();

  /**
   * Get all widget data in a single query
   */
  static async getWidgetData(): Promise<WidgetData | null> {
    const snapshot = await getDoc(this.widgetDataRef);
    const data = snapshot.data() as WidgetData | undefined;
    return data || null;
  }

  /**
   * Get service categories with their services
   */
  static async getServiceCategories(): Promise<ServiceCategory[]> {
    const data = await this.getWidgetData();
    if (!data) return [];

    return Object.values(data.serviceCategories)
      .filter(category => category.active)
      .map(category => ({
        id: category.id,
        name: category.name,
        description: category.description,
        order: category.order,
        active: category.active,
        services: Object.values(category.services)
          .filter(service => service.active)
          .map(service => ({
            id: service.id,
            name: service.name,
            duration: service.duration,
            price: service.price,
            description: service.description,
            order: service.order,
            active: service.active,
            categoryId: category.id
          }))
      }))
      .sort((a, b) => a.order - b.order);
  }

  /**
   * Get all active employees
   */
  static async getEmployees(): Promise<Employee[]> {
    const data = await this.getWidgetData();
    if (!data) return [];

    return Object.values(data.professionals)
      .filter(professional => professional.active)
      .map(professional => ({
        id: professional.id,
        name: professional.name,
        role: professional.role,
        active: professional.active,
        services: professional.services,
        schedule: professional.schedule,
        bookings: professional.bookings
      }));
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
}
