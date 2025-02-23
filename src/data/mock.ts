import { Service, ServiceCategory, Employee, Availability } from '../services/api/types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cat1',
    name: 'Hair Care',
    description: 'Professional hair care services'
  },
  {
    id: 'cat2',
    name: 'Skin Care',
    description: 'Facial and skin treatments'
  }
];

export const services: Service[] = [
  {
    id: 'srv1',
    name: 'Haircut',
    description: 'Professional haircut with wash and style',
    duration: 60,
    price: 50,
    categoryId: 'cat1'
  },
  {
    id: 'srv2',
    name: 'Facial Treatment',
    description: 'Deep cleansing facial treatment',
    duration: 90,
    price: 80,
    categoryId: 'cat2'
  }
];

export const employees: Employee[] = [
  {
    id: 'emp1',
    name: 'John Doe',
    role: 'Senior Stylist',
    services: ['srv1'],
    schedule: {
      '1': { start: '09:00', end: '17:00' },
      '2': { start: '09:00', end: '17:00' },
      '3': { start: '09:00', end: '17:00' },
      '4': { start: '09:00', end: '17:00' },
      '5': { start: '09:00', end: '17:00' }
    }
  },
  {
    id: 'emp2',
    name: 'Jane Smith',
    role: 'Esthetician',
    services: ['srv2'],
    schedule: {
      '1': { start: '10:00', end: '18:00' },
      '2': { start: '10:00', end: '18:00' },
      '3': { start: '10:00', end: '18:00' },
      '4': { start: '10:00', end: '18:00' },
      '5': { start: '10:00', end: '18:00' }
    }
  }
];
