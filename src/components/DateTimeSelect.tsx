import React, { useState, useEffect } from 'react';
import { Employee, Service } from '../services/api/types';
import { AvailabilityService } from '../services/availability/availabilityService';
import { AvailabilityCacheService } from '../services/availability/availabilityCache';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
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
  selectedEmployee: Employee | null;
  selectedServices: Service[];
  isLoading?: boolean;
}

export const DateTimeSelect: React.FC<DateTimeSelectProps> = ({
  selectedEmployee,
  selectedServices,
  onDateTimeSelect,
  isLoading = false
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [disabledDates, setDisabledDates] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (selectedEmployee) {
      // Find the next available date
      const nextDate = AvailabilityService.getNextAvailableDate(selectedEmployee, new Date());
      if (nextDate) {
        setSelectedDate(nextDate);
      }
    }
  }, [selectedEmployee]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Generate calendar data
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  // Get first day of month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  let firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  // Convert to Monday-based (0 = Monday, 1 = Tuesday, ..., 6 = Sunday)
  firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

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
  
  // Generate time slots based on employee availability
  const generateTimeSlots = async () => {
    if (!selectedDate || !selectedEmployee) return [];

    const schedule = await AvailabilityService.getScheduleForDate(selectedEmployee, selectedDate);
    if (!schedule || !schedule.isWorking || !schedule.timeSlots.length) return [];

    const slots: string[] = [];
    const now = new Date();
    const isToday = selectedDate.getDate() === now.getDate() && 
                   selectedDate.getMonth() === now.getMonth() && 
                   selectedDate.getFullYear() === now.getFullYear();

    for (const slot of schedule.timeSlots) {
      const [startHour, startMinute] = slot.start.split(':').map(Number);
      const [endHour, endMinute] = slot.end.split(':').map(Number);
      
      // For today, only show future time slots
      if (isToday) {
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        // If this slot is in the past, skip it
        if (startHour < currentHour || 
            (startHour === currentHour && startMinute <= currentMinute)) {
          continue;
        }
      }

      // Add the slot start time
      slots.push(slot.start);

      // Generate 15-minute intervals within the slot
      let currentHour = startHour;
      let currentMinute = startMinute + 15;

      while (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
        const time = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
        slots.push(time);

        currentMinute += 15;
        if (currentMinute >= 60) {
          currentHour += 1;
          currentMinute = 0;
        }
      }
    }

    return slots.sort();
  };

  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  useEffect(() => {
    const updateTimeSlots = async () => {
      const slots = await generateTimeSlots();
      setAvailableTimeSlots(slots);
    };
    updateTimeSlots();
  }, [selectedDate, selectedEmployee]);



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

  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  return (
    <Container>
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
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
          const dateStr = date.toISOString().split('T')[0];
          const isAvailable = selectedEmployee ? AvailabilityCacheService.isDateAvailable(selectedEmployee.id, date) : null;
          const isDisabled = isPast || !selectedEmployee || isAvailable === false;

          return (
            <Day
              key={day}
              onClick={() => !isDisabled && handleDateSelect(day)}
              $isToday={isToday}
              $isSelected={isSelected}
              $isDisabled={isDisabled}
              disabled={isDisabled}
            >
              {day}
            </Day>
          );
        })}
      </Calendar>

      {selectedDate && availableTimeSlots.length > 0 && (
        <TimeGrid>
          {availableTimeSlots.map(time => (
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
      {selectedDate && availableTimeSlots.length === 0 && (
        <div style={{ color: theme.colors.text, textAlign: 'center', padding: '16px' }}>
          No hay horarios disponibles para esta fecha.
        </div>
      )}
    </Container>
  );
};
