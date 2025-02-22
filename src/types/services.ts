export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  category: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

// Sample data
export const sampleServices: ServiceCategory[] = [
  {
    id: 'waxing',
    name: 'Waxing',
    services: [
      {
        id: 'half-leg-wax',
        name: 'Half Leg Waxing',
        price: 30,
        duration: 30,
        category: 'Waxing'
      },
      {
        id: 'full-leg-wax',
        name: 'Full Leg Waxing',
        price: 45,
        duration: 45,
        category: 'Waxing'
      },
      {
        id: 'arms-wax',
        name: 'Arms Waxing',
        price: 25,
        duration: 30,
        category: 'Waxing'
      },
      {
        id: 'brazilian-wax',
        name: 'Brazilian Waxing',
        price: 50,
        duration: 45,
        category: 'Waxing'
      },
      {
        id: 'eyebrow-wax',
        name: 'Eyebrow Waxing',
        price: 15,
        duration: 15,
        category: 'Waxing'
      }
    ]
  },
  {
    id: 'manicure',
    name: 'Manicure',
    services: [
      {
        id: 'classic-manicure',
        name: 'Classic Manicure',
        price: 35,
        duration: 45,
        category: 'Manicure'
      },
      {
        id: 'permanent-manicure',
        name: 'Permanent Manicure',
        price: 50,
        duration: 60,
        category: 'Manicure'
      },
      {
        id: 'semi-permanent-manicure',
        name: 'Semi-Permanent Manicure',
        price: 45,
        duration: 50,
        category: 'Manicure'
      },
      {
        id: 'french-manicure',
        name: 'French Manicure',
        price: 40,
        duration: 45,
        category: 'Manicure'
      }
    ]
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    services: [
      {
        id: 'classic-pedicure',
        name: 'Classic Pedicure',
        price: 45,
        duration: 60,
        category: 'Pedicure'
      },
      {
        id: 'permanent-pedicure',
        name: 'Permanent Pedicure',
        price: 60,
        duration: 75,
        category: 'Pedicure'
      },
      {
        id: 'semi-permanent-pedicure',
        name: 'Semi-Permanent Pedicure',
        price: 55,
        duration: 65,
        category: 'Pedicure'
      },
      {
        id: 'french-pedicure',
        name: 'French Pedicure',
        price: 50,
        duration: 60,
        category: 'Pedicure'
      }
    ]
  }
];
