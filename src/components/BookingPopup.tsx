import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ServiceCategorySelect } from './ServiceCategorySelect';
import { EmployeeSelect } from './EmployeeSelect';
import { BookingForm } from './BookingForm';
import { Service } from '../types/services';
import { Employee } from '../types/employees';
import { FirebaseBookingService } from '../services/firebase/bookingService';
import { AvailabilityCacheService } from '../services/availability/availabilityCache';
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
  z-index: 9999;
  padding: 16px;
  overscroll-behavior: none;
  touch-action: none;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 480px) {
    padding: 0;
    align-items: flex-start;
  }
`;

const PopupContent = styled.div.attrs({ id: 'popup-content' })`
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
  transform: translateZ(0);
  will-change: transform;

  @media (max-width: 768px) {
    padding: 24px;
    width: 95%;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    border: none;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
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

const ContentScroll = styled.div.attrs({ id: 'content-scroll' })`
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
  initialCategories: ServiceCategory[];
  initialEmployees: Employee[];
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

export const BookingPopup: React.FC<BookingPopupProps> = ({ onClose, initialCategories, initialEmployees }) => {
  const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);

  // Preload availability data for all employees when the component mounts
  useEffect(() => {
    const preloadAllEmployeesAvailability = async () => {
      const today = new Date();
      const activeEmployees = initialEmployees.filter(emp => emp.active);
      
      for (const employee of activeEmployees) {
        await AvailabilityCacheService.preloadAvailability(employee, today);
      }
    };

    preloadAllEmployeesAvailability();
  }, [initialEmployees]);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (window.innerWidth <= 480) {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('overflow', 'hidden', 'important');
      document.body.style.setProperty('overflow', 'hidden', 'important');
      document.body.style.setProperty('position', 'fixed', 'important');
      document.body.style.setProperty('top', `-${scrollY}px`, 'important');
      document.body.style.setProperty('width', '100%', 'important');
      document.body.style.setProperty('touch-action', 'none', 'important');

      return () => {
        document.documentElement.style.removeProperty('overflow');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('touch-action');
        window.scrollTo(0, scrollY);
      };
    }
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

  // Handle scroll position when step changes
  useEffect(() => {
    const contentScroll = document.getElementById('content-scroll');
    if (contentScroll) {
      contentScroll.scrollTop = 0;
    }
  }, [currentStep]);

  // Handle background loading of availability data
  useEffect(() => {
    if (!isLoadingAvailability || !selectedEmployee) return;

    const loadAvailability = async () => {
      try {
        await AvailabilityCacheService.preloadAvailability(selectedEmployee, new Date());
      } finally {
        setIsLoadingAvailability(false);
      }
    };

    loadAvailability();
  }, [selectedEmployee, isLoadingAvailability]);

  const handleServiceSelect = (services: Service[]) => {
    setSelectedServices(services);
  };

  const bookingService = new FirebaseBookingService();

  // Debug logging for initial data
  useEffect(() => {
    console.log('Initial categories:', initialCategories);
    console.log('Initial employees:', initialEmployees);
  }, [initialCategories, initialEmployees]);

  // Sort categories and their services by order
  const sortedCategories = [...initialCategories]
    .sort((a, b) => {
      if (a.order === undefined) return 1;
      if (b.order === undefined) return -1;
      return a.order - b.order;
    })
    .map(cat => ({
      ...cat,
      services: cat.services
        ? [...cat.services].sort((a, b) => {
            if (a.order === undefined) return 1;
            if (b.order === undefined) return -1;
            return a.order - b.order;
          })
        : []
    }));

  console.log('Sorted categories:', sortedCategories);

  const [categories, setCategories] = useState(sortedCategories);
  const [employees, setEmployees] = useState(initialEmployees);

  // Update state when props change
  useEffect(() => {
    console.log('Categories updated:', initialCategories);
    setCategories(sortedCategories);
  }, [initialCategories]);

  useEffect(() => {
    console.log('Employees updated:', initialEmployees);
    setEmployees(initialEmployees);
  }, [initialEmployees]);

  const handleNextStep = async () => {
    if (currentStep === 'services') {
      if (selectedServices.length === 0) {
        return; // Don't proceed if no services selected
      }

      // Filter employees based on selected services
      const availableEmployees = employees.filter(employee =>
        employee.active && selectedServices.every(service => employee.services.includes(service.id))
      );
      console.log('Available employees:', availableEmployees);
      
      if (availableEmployees.length === 1) {
        setSelectedEmployee(availableEmployees[0]);
        setCurrentStep('datetime');
      } else if (availableEmployees.length > 1) {
        setCurrentStep('employee');
      } else {
        // If no employees are available, proceed to datetime selection
        // The admin will need to assign an employee later
        setCurrentStep('datetime');
      }
    } else if (currentStep === 'employee' && selectedEmployee) {
      setCurrentStep('datetime');
    } else if (currentStep === 'datetime' && isDateTimeValid) {
      setCurrentStep('client-info');
    }
    // Scroll to top when changing sections
    const content = document.getElementById('popup-content');
    if (content) {
      setTimeout(() => content.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  const handleBack = () => {
    if (currentStep === 'client-info') {
      setCurrentStep('datetime');
    } else if (currentStep === 'datetime') {
      // Get available employees for the selected services
      const availableEmployees = employees.filter(employee =>
        employee.active && selectedServices.every(service => employee.services.includes(service.id))
      );
      
      // If there's only one available employee or no employees, go back to services
      if (availableEmployees.length <= 1) {
        setCurrentStep('services');
      } else {
        setCurrentStep('employee');
      }
    } else if (currentStep === 'employee') {
      setCurrentStep('services');
    }
    // Scroll to top when changing sections
    const content = document.getElementById('popup-content');
    if (content) {
      setTimeout(() => content.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  const handleBooking = async () => {
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

    if (isClientInfoValid && clientInfo && selectedServices.length > 0) {
      try {
        // Create the booking with all selected information
        const booking = await bookingService.createBooking({
          services: selectedServices,
          employeeId: selectedEmployee?.id || '',
          employeeName: selectedEmployee?.name || 'No asignado',
          clientInfo,
          date: selectedDate,
          time: selectedTime
        });

        // Set the booking number from the created booking
        setBookingNumber(booking.id);
        
        console.log('Booking created:', booking);
        
        setCurrentStep('confirmation');
      } catch (error) {
        console.error('Error creating booking:', error);
        // Here you might want to show an error message to the user
      }
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
            <>
              {categories.length > 0 ? (
                <ServiceCategorySelect
                  categories={categories}
                  onServiceSelect={handleServiceSelect}
                  selectedServices={selectedServices}
                />
              ) : (
                <div style={{
                  padding: '20px',
                  textAlign: 'center',
                  color: theme.colors.text
                }}>
                  Loading services...
                </div>
              )}
            </>
          )}

          {currentStep === 'employee' && (
            <EmployeeSelect
              employees={employees}
              selectedServices={selectedServices}
              selectedEmployee={selectedEmployee}
              onEmployeeSelect={setSelectedEmployee}
            />
          )}

          {currentStep === 'datetime' && (
            <>
              {selectedEmployee ? (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ 
                    margin: '0 0 8px 0',
                    fontSize: theme.typography.title.size,
                    fontWeight: theme.typography.title.weight,
                    color: theme.colors.text
                  }}>
                    {selectedEmployee.name}
                  </h3>
                  <p style={{ 
                    margin: 0,
                    fontSize: theme.typography.text.size,
                    color: theme.colors.text,
                    opacity: 0.8
                  }}>
                    {selectedEmployee.role}
                  </p>
                </div>
              ) : (
                <div style={{ 
                  marginBottom: '24px',
                  padding: '12px',
                  backgroundColor: '#fff3cd',
                  border: '1px solid #ffeeba',
                  borderRadius: '4px',
                  color: '#856404'
                }}>
                  <p style={{ margin: 0 }}>
                    No hay profesionales disponibles en este momento para los servicios seleccionados. 
                    Se te asignará un profesional después de la reserva.
                  </p>
                </div>
              )}
              <BookingForm
                onValidityChange={setIsDateTimeValid}
                onDateSelect={setSelectedDate}
                onTimeSelect={setSelectedTime}
                selectedEmployee={selectedEmployee}
                selectedServices={selectedServices}
                isLoadingAvailability={isLoadingAvailability}
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
                onClick={() => {
                  handleBooking().catch(error => {
                    console.error('Error in booking:', error);
                    // Here you could show an error message to the user
                  });
                }}
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
