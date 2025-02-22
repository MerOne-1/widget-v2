import React, { useState, useEffect } from 'react';
import { DateTimeSelect } from './DateTimeSelect';



interface BookingFormProps {
  onFormValidityChange: (isValid: boolean) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  onFormValidityChange
}) => {
  const handleDateTimeSelect = (date: Date | null, time: string | null) => {
    onFormValidityChange(date !== null && time !== null);
  };

  return <DateTimeSelect onDateTimeSelect={handleDateTimeSelect} />;
};
