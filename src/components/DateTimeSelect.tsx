import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${theme.colors.border};
  border: 2px solid ${theme.colors.containerBorder};
  border-radius: ${theme.borderRadius.default};
  overflow: hidden;
`;

const WeekDay = styled.div`
  background-color: white;
  padding: 12px 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.text};
`;

const Day = styled.button<{ $isToday?: boolean; $isSelected?: boolean; $isDisabled?: boolean }>`
  background-color: white;
  border: none;
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
  color: ${props => props.$isDisabled ? '#ccc' : theme.colors.text};
  font-weight: ${props => props.$isToday || props.$isSelected ? '600' : 'normal'};
  
  ${props => props.$isToday && `
    &:after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${theme.colors.button};
    }
  `}
  
  ${props => !props.$isDisabled && `
    &:hover {
      background-color: #f5f5f5;
    }
  `}
  
  ${props => props.$isSelected && `
    background-color: ${theme.colors.button} !important;
    color: white;
  `}
  
  ${props => props.$isDisabled && `
    cursor: not-allowed;
  `}
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const TimeSlot = styled.button<{ $isSelected?: boolean }>`
  padding: 12px;
  border: 2px solid ${props => props.$isSelected ? theme.colors.button : theme.colors.containerBorder};
  border-radius: ${theme.borderRadius.default};
  background-color: ${props => props.$isSelected ? theme.colors.button : 'white'};
  color: ${props => props.$isSelected ? 'white' : theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${theme.colors.button};
    background-color: ${props => props.$isSelected ? theme.colors.button : '#f5f5f5'};
  }
`;

interface DateTimeSelectProps {
  onDateTimeSelect: (date: Date | null, time: string | null) => void;
}

export const DateTimeSelect: React.FC<DateTimeSelectProps> = ({
  onDateTimeSelect
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Generate calendar data
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = currentMonth.getDay();
  
  // Generate time slots (9:00 AM to 5:00 PM, 15-minute intervals)
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(today.getFullYear(), today.getMonth(), day);
    setSelectedDate(newDate);
    setSelectedTime(null);
    onDateTimeSelect(newDate, null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onDateTimeSelect(selectedDate, time);
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timeSlots = generateTimeSlots();

  return (
    <Container>
      <Calendar>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <Day key={`empty-${index}`} disabled $isDisabled />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const date = new Date(today.getFullYear(), today.getMonth(), day);
          const isToday = day === today.getDate();
          const isSelected = selectedDate?.getDate() === day;
          const isPast = date < startOfToday;

          return (
            <Day
              key={day}
              onClick={() => !isPast && handleDateSelect(day)}
              $isToday={isToday}
              $isSelected={isSelected}
              $isDisabled={isPast}
              disabled={isPast}
            >
              {day}
            </Day>
          );
        })}
      </Calendar>

      {selectedDate && (
        <TimeGrid>
          {timeSlots.map(time => (
            <TimeSlot
              key={time}
              onClick={() => handleTimeSelect(time)}
              $isSelected={selectedTime === time}
            >
              {time}
            </TimeSlot>
          ))}
        </TimeGrid>
      )}
    </Container>
  );
};
