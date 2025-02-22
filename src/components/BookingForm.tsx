import React, { useState, useEffect } from 'react';
import { DateTimeSelect } from './DateTimeSelect';



interface BookingFormProps {
  onValidityChange: (isValid: boolean) => void;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  onValidityChange,
  onDateSelect,
  onTimeSelect
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

  return <DateTimeSelect onDateTimeSelect={handleDateTimeSelect} />;
};
