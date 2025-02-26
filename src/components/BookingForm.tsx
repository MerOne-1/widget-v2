import React, { useState, useEffect } from 'react';
import { DateTimeSelect } from './DateTimeSelect';
import { Employee } from '../services/api/types';
import { Service } from '../services/api/types';



interface BookingFormProps {
  onValidityChange: (isValid: boolean) => void;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
  selectedEmployee: Employee | null;
  selectedServices: Service[];
  isLoadingAvailability?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedEmployee,
  selectedServices,
  onValidityChange,
  onDateSelect,
  onTimeSelect,
  isLoadingAvailability = false
}) => {
  const handleDateTimeSelect = (date: Date | null, time: string | null) => {
    const isValid = date !== null && time !== null;
    onValidityChange(isValid);
    
    if (isValid && date && time) {
      const formattedDate = date.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      onDateSelect(formattedDate);
      onTimeSelect(time);
    }
  };

  return (
    <DateTimeSelect 
      onDateTimeSelect={handleDateTimeSelect}
      selectedEmployee={selectedEmployee}
      selectedServices={selectedServices}
      isLoading={isLoadingAvailability}
    />
  );
};
