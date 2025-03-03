export interface WidgetData {
  lastUpdated: Date;
  serviceCategories: {
    [categoryId: string]: {
      id: string;
      name: string;
      description: string;
      order: number;
      active: boolean;
      services: {
        [serviceId: string]: {
          id: string;
          name: string;
          duration: number;
          price: number;
          description: string;
          order: number;
          active: boolean;
        };
      };
    };
  };
  professionals: {
    [professionalId: string]: {
      id: string;
      name: string;
      role: string;
      active: boolean;
      services: string[];
      schedule: {
        [day: string]: {
          start: string;
          end: string;
          break?: {
            start: string;
            end: string;
          };
        };
      };
      bookings: {
        [date: string]: {
          [bookingId: string]: {
            timeSlot: string;
            serviceId: string | null;
            status: string;
            duration: number;
          };
        };
      };
    };
  };
}
