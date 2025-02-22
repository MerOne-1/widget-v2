import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const MonthNavigator = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 4px 8px;
  color: ${theme.colors.text};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    color: ${theme.colors.primary};
  }
`;

const MonthYear = styled.span`
  font-size: ${theme.typography.title.size};
  font-weight: ${theme.typography.title.weight};
  color: ${theme.colors.title};
  min-width: 180px;
  text-align: center;
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
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Generate calendar data
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const handlePreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    // Set the date to the first of the month to properly compare months
    const startOfNewMonth = new Date(newMonth.getFullYear(), newMonth.getMonth(), 1);
    const startOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    
    if (startOfNewMonth >= startOfCurrentMonth) {
      setCurrentMonth(newMonth);
    }
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };
  
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
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    setSelectedTime(null);
    onDateTimeSelect(newDate, null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onDateTimeSelect(selectedDate, time);
  };

  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const timeSlots = generateTimeSlots();

  return (
    <Container>
      <CalendarHeader>
        <MonthNavigator>
          <NavigationButton 
            onClick={handlePreviousMonth}
            disabled={currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()}
          >
            ‹
          </NavigationButton>
          <MonthYear>
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </MonthYear>
          <NavigationButton onClick={handleNextMonth}>
            ›
          </NavigationButton>
        </MonthNavigator>
      </CalendarHeader>
      <Calendar>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <Day key={`empty-${index}`} disabled $isDisabled />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
          const isToday = day === today.getDate() && currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear();
          const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth.getMonth() && selectedDate?.getFullYear() === currentMonth.getFullYear();
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
