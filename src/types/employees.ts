export interface Employee {
  id: string;
  name: string;
  role: string;
  services: string[]; // Array of service IDs they can perform
}

export const sampleEmployees: Employee[] = [
  {
    id: 'emp1',
    name: 'Sarah Johnson',
    role: 'Senior Beautician',
    services: ['half-leg-wax', 'full-leg-wax', 'arms-wax', 'brazilian-wax', 'eyebrow-wax']
  },
  {
    id: 'emp2',
    name: 'Emily Chen',
    role: 'Nail Specialist',
    services: ['classic-manicure', 'permanent-manicure', 'semi-permanent-manicure', 'french-manicure',
               'classic-pedicure', 'permanent-pedicure', 'semi-permanent-pedicure', 'french-pedicure']
  },
  {
    id: 'emp3',
    name: 'Maria Garcia',
    role: 'Senior Beautician',
    services: ['half-leg-wax', 'full-leg-wax', 'arms-wax', 'brazilian-wax', 'eyebrow-wax',
               'classic-manicure', 'french-manicure', 'classic-pedicure', 'french-pedicure']
  }
];
