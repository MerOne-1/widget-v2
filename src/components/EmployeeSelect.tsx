import React from 'react';
import styled from 'styled-components';
import { Employee } from '../types/employees';
import { Service } from '../types/services';
import { theme } from '../styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EmployeeCard = styled.div<{ $isSelected: boolean }>`
  padding: 16px;
  border: 2px solid ${props => props.$isSelected ? theme.colors.button : theme.colors.border};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${theme.colors.button};
    background-color: ${props => props.$isSelected ? 'white' : '#f8f8f8'};
  }
`;

const EmployeeName = styled.h3`
  margin: 0;
  font-size: ${theme.typography.title.size};
  font-weight: ${theme.typography.title.weight};
  color: ${theme.colors.text};
`;

const EmployeeRole = styled.p`
  margin: 4px 0 0;
  font-size: ${theme.typography.text.size};
  color: ${theme.colors.text};
  opacity: 0.8;
`;

interface EmployeeSelectProps {
  employees: Employee[];
  selectedServices: Service[];
  selectedEmployee: Employee | null;
  onEmployeeSelect: (employee: Employee) => void;
}

export const EmployeeSelect: React.FC<EmployeeSelectProps> = ({
  employees,
  selectedServices,
  selectedEmployee,
  onEmployeeSelect,
}) => {
  // Filter employees who can perform all selected services
  const availableEmployees = employees.filter(employee =>
    selectedServices.every(service => employee.services.includes(service.id))
  );

  if (availableEmployees.length === 0) {
    return (
      <div>No employees available for the selected services.</div>
    );
  }

  if (availableEmployees.length === 1) {
    // Auto-select if there's only one employee
    if (!selectedEmployee) {
      onEmployeeSelect(availableEmployees[0]);
    }
    return null; // Don't show the selection UI
  }

  return (
    <Container>
      {availableEmployees.map(employee => (
        <EmployeeCard
          key={employee.id}
          $isSelected={selectedEmployee?.id === employee.id}
          onClick={() => onEmployeeSelect(employee)}
        >
          <EmployeeName>{employee.name}</EmployeeName>
          <EmployeeRole>{employee.role}</EmployeeRole>
        </EmployeeCard>
      ))}
    </Container>
  );
};
