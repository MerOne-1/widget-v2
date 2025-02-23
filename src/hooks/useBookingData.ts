import { useState, useEffect } from 'react';
import { bookingApi } from '../services/api/bookingApi';
import { Service, ServiceCategory, Employee } from '../services/api/types';

export function useServiceCategories() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    bookingApi.getServiceCategories()
      .then(data => setCategories(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading, error };
}

export function useServices(categoryId?: string) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    bookingApi.getServices(categoryId)
      .then(data => setServices(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { services, loading, error };
}

export function useEmployees(serviceId?: string) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!serviceId) {
      setEmployees([]);
      setLoading(false);
      return;
    }

    bookingApi.getEmployees(serviceId)
      .then(data => setEmployees(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [serviceId]);

  return { employees, loading, error };
}

export function useAvailability(params: { employeeId: string; serviceId: string; date: string; }) {
  const [slots, setSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!params.employeeId || !params.serviceId || !params.date) {
      setSlots([]);
      setLoading(false);
      return;
    }

    bookingApi.getAvailability(params)
      .then(data => setSlots(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [params.employeeId, params.serviceId, params.date]);

  return { slots, loading, error };
}
