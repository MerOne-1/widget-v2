// Type definitions for the booking widget project

export interface Professional {
  name?: string;
  fullName?: string;
  [key: string]: any;
}

export interface Service {
  name: string;
  duration: number;
  price: any;
  id?: string;
  [key: string]: any;
}

export interface Settings {
  businessName?: string;
  businessEmail?: string;
  businessPhone?: string;
  [key: string]: any;
}

export interface EmailTemplate {
  subject?: string;
  body?: string;
  [key: string]: any;
}
