import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ServiceCategorySelect } from './ServiceCategorySelect';
import { EmployeeSelect } from './EmployeeSelect';
import { BookingForm } from './BookingForm';
import { Service, sampleServices } from '../types/services';
import { Employee, sampleEmployees } from '../types/employees';
import { ClientInfoForm } from './ClientInfoForm';
import { ConfirmationSection } from './ConfirmationSection';
import { theme } from '../styles/theme';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 16px;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 480px) {
    padding: 0;
    align-items: flex-start;
  }
`;

const PopupContent = styled.div`
  background: white;
  padding: 32px;
  border: 2px solid ${theme.colors.containerBorder};
  border-radius: ${theme.borderRadius.default};
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0); /* Force hardware acceleration */
  will-change: transform; /* Optimize for animations */

  @media (max-width: 768px) {
    padding: 24px;
    width: 95%;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
    border: none;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
    font-size: 20px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  align-items: center;
  justify-content: center;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  margin-bottom: 24px;
  color: ${theme.colors.title};
  font-size: ${theme.typography.title.size};
  font-weight: ${theme.typography.title.weight};
  text-transform: ${theme.typography.title.transform};
  font-family: ${theme.typography.fontFamily};
`;

const BookButton = styled.button`
  background-color: ${theme.colors.button};
  color: ${theme.colors.buttonText};
  padding: 16px 32px;
  border: none;
  border-radius: ${theme.borderRadius.button};
  font-size: ${theme.typography.button.size};
  font-weight: ${theme.typography.button.weight};
  text-transform: ${theme.typography.button.transform};
  font-family: ${theme.typography.fontFamily};
  width: 100%;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ContentScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  margin-right: -8px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    
    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;

interface BookingPopupProps {
  onClose: () => void;
}

type BookingStep = 'services' | 'employee' | 'datetime' | 'client-info' | 'confirmation';

interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  comments?: string;
}

export const BookingPopup: React.FC<BookingPopupProps> = ({ onClose }) => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Prevent body scroll when popup is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = originalStyle;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);
  const [isDateTimeValid, setIsDateTimeValid] = useState(false);
  const [isClientInfoValid, setIsClientInfoValid] = useState(false);
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null);
  const validateFormRef = useRef<((showErrors: boolean) => void) | null>(null);
  const [currentStep, setCurrentStep] = useState<BookingStep>('services');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingNumber, setBookingNumber] = useState<string>('');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleServiceSelect = (services: Service[]) => {
    setSelectedServices(services);
  };

  const handleNextStep = () => {
    if (currentStep === 'services' && selectedServices.length > 0) {
      const availableEmployees = sampleEmployees.filter(employee =>
        selectedServices.every(service => employee.services.includes(service.id))
      );
      
      if (availableEmployees.length === 1) {
        setSelectedEmployee(availableEmployees[0]);
        setCurrentStep('datetime');
      } else {
        setCurrentStep('employee');
      }
    } else if (currentStep === 'employee' && selectedEmployee) {
      setCurrentStep('datetime');
    } else if (currentStep === 'datetime' && isDateTimeValid) {
      setCurrentStep('client-info');
    }
  };

  const handleBack = () => {
    if (currentStep === 'client-info') {
      setCurrentStep('datetime');
    } else if (currentStep === 'datetime') {
      const availableEmployees = sampleEmployees.filter(employee =>
        selectedServices.every(service => employee.services.includes(service.id))
      );
      
      if (availableEmployees.length === 1) {
        setCurrentStep('services');
      } else {
        setCurrentStep('employee');
      }
    } else if (currentStep === 'employee') {
      setCurrentStep('services');
    }
  };

  const handleBooking = () => {
    if (selectedServices.length === 0) {
      return;
    }

    // Show validation errors when clicking Reservar Ahora
    if (currentStep === 'client-info') {
      if (!validateFormRef.current) {
        return; // Don't proceed if validation function is not available
      }

      // Run validation
      validateFormRef.current(true);

      // Check if form is valid
      if (!isClientInfoValid) {
        return;
      }
    }

    if (isClientInfoValid && clientInfo) {
      // Generate a random booking number (in production this would come from the backend)
      const randomBookingNumber = Math.random().toString(36).substring(2, 10).toUpperCase();
      setBookingNumber(randomBookingNumber);
      
      // Here you would typically submit the booking to your backend
      console.log('Booking submitted:', {
        bookingNumber: randomBookingNumber,
        services: selectedServices,
        employee: selectedEmployee,
        date: selectedDate,
        time: selectedTime,
        clientInfo: clientInfo,
      });
      
      setCurrentStep('confirmation');
    }
  };

  return createPortal(
    <PopupOverlay onClick={(e) => {
      // Only close if clicking the overlay background
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>
          {currentStep === 'services' && 'Selecciona los Servicios'}
          {currentStep === 'employee' && 'Elige tu Profesional'}
          {currentStep === 'datetime' && 'Selecciona Fecha y Hora'}
          {currentStep === 'client-info' && 'Tus Datos'}
          {currentStep === 'confirmation' && '¡Reserva Confirmada!'}
        </Title>
        
        <ContentScroll>
          {currentStep === 'services' && (
            <ServiceCategorySelect
              categories={sampleServices}
              onServiceSelect={handleServiceSelect}
              selectedServices={selectedServices}
            />
          )}

          {currentStep === 'employee' && (
            <EmployeeSelect
              employees={sampleEmployees}
              selectedServices={selectedServices}
              selectedEmployee={selectedEmployee}
              onEmployeeSelect={setSelectedEmployee}
            />
          )}

          {currentStep === 'datetime' && (
            <>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  margin: '0 0 8px 0',
                  fontSize: theme.typography.title.size,
                  fontWeight: theme.typography.title.weight,
                  color: theme.colors.text
                }}>
                  {selectedEmployee?.name}
                </h3>
                <p style={{ 
                  margin: 0,
                  fontSize: theme.typography.text.size,
                  color: theme.colors.text,
                  opacity: 0.8
                }}>
                  {selectedEmployee?.role}
                </p>
              </div>
              <BookingForm
                onValidityChange={setIsDateTimeValid}
                onDateSelect={setSelectedDate}
                onTimeSelect={setSelectedTime}
              />
            </>
          )}

          {currentStep === 'client-info' && (
            <ClientInfoForm
              onFormValidityChange={(isValid, data) => {
                setIsClientInfoValid(isValid);
                if (data) {
                  setClientInfo(data);
                }
              }}
              onValidateRef={fn => {
                validateFormRef.current = fn;
              }}
            />
          )}
          
          {currentStep === 'confirmation' && clientInfo && (
            <ConfirmationSection
              bookingNumber={bookingNumber}
              selectedServices={selectedServices}
              clientInfo={clientInfo}
              appointmentTime={selectedTime}
              appointmentDate={selectedDate}
            />
          )}
        </ContentScroll>

        {currentStep !== 'confirmation' && (
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            {currentStep !== 'services' && (
              <BookButton
                onClick={handleBack}
                style={{ flex: 1, backgroundColor: '#f5f5f5', color: 'black' }}
              >
                Volver
              </BookButton>
            )}
            
            {currentStep === 'client-info' ? (
              <BookButton
                onClick={handleBooking}
                style={{ flex: 1 }}
              >
                Reservar Ahora
              </BookButton>
            ) : (
              <BookButton
                disabled={
                  (currentStep === 'services' && selectedServices.length === 0) ||
                  (currentStep === 'employee' && !selectedEmployee) ||
                  (currentStep === 'datetime' && !isDateTimeValid)
                }
                onClick={handleNextStep}
                style={{ flex: 1 }}
              >
                Siguiente
              </BookButton>
            )}
          </div>
        )}
      </PopupContent>
    </PopupOverlay>,
    document.body
  );
};
