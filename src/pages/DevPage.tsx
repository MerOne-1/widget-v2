import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BookingPopup } from '../components/BookingPopup';
import { theme } from '../styles/theme';
import { WidgetDataService } from '../services/widgetDataService';
import { AvailabilityCacheService } from '../services/availability/availabilityCache';
import { ServiceCategory } from '../types/services';
import { Employee } from '../types/employees';

const DevContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${theme.typography.fontFamily};
`;

const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.default};
  background: white;
`;

const Title = styled.h2`
  font-size: ${theme.typography.title.size};
  font-weight: ${theme.typography.title.weight};
  margin-bottom: 1.5rem;
  color: ${theme.colors.title};
  border-bottom: 2px solid ${theme.colors.border};
  padding-bottom: 0.5rem;
  text-transform: ${theme.typography.title.transform};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const BookButton = styled.button`
  background-color: ${theme.colors.button};
  color: ${theme.colors.buttonText};
  padding: 12px 24px;
  border: none;
  border-radius: ${theme.borderRadius.button};
  font-size: ${theme.typography.button.size};
  font-weight: ${theme.typography.button.weight};
  cursor: pointer;
  text-transform: ${theme.typography.button.transform};
`;

const ColorPalette = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  font-family: ${theme.typography.fontFamily};
`;

const ColorSwatch = styled.div<{ $color: string; $name: string }>`
  width: 100px;
  height: 100px;
  background-color: ${props => props.$color};
  border-radius: ${theme.borderRadius.default};
  border: 1px solid ${theme.colors.border};
  position: relative;
  
  &:after {
    content: '${props => props.$name}';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: ${theme.typography.text.size};
    color: ${theme.colors.text};
    text-transform: ${theme.typography.text.transform};
  }
`;

const DevPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        console.time('Total Load Time');
        
        // First get the raw widget data to debug
        const rawData = await WidgetDataService.getWidgetData();
        console.log('Raw widget data:', rawData);
        
        console.time('Widget Data Load');
        // Load categories with services and employees from the widget data
        const [cats, emps] = await Promise.all([
          WidgetDataService.getServiceCategories(),
          WidgetDataService.getEmployees()
        ]);
        console.timeEnd('Widget Data Load');

        console.log('Loaded categories:', cats);
        console.log('Loaded employees:', emps);

        setCategories(cats);
        setEmployees(emps);

        // Preload availability data for all active employees
        console.time('Availability Cache');
        const today = new Date();
        await Promise.all(
          emps.map(employee =>
            AvailabilityCacheService.preloadAvailability(employee, today)
          )
        );
        console.timeEnd('Availability Cache');
        console.timeEnd('Total Load Time');
      } catch (error) {
        console.error('Error loading initial data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Load initial data
    loadData();

    // Subscribe to real-time updates
    const unsubscribe = WidgetDataService.subscribeToUpdates(async (data) => {
      if (data) {
        const [cats, emps] = await Promise.all([
          WidgetDataService.getServiceCategories(),
          WidgetDataService.getEmployees()
        ]);
        setCategories(cats);
        setEmployees(emps);
      }
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
      WidgetDataService.cleanup();
    };
  }, []);

  return (
    <DevContainer>
      <Title>Booking Widget Development</Title>
      
      <Section>
        <Title>Color Palette</Title>
        <ColorPalette>
          <ColorSwatch $color={theme.colors.border} $name="Border Color" />
          <ColorSwatch $color={theme.colors.title} $name="Title Color" />
          <ColorSwatch $color={theme.colors.text} $name="Text Color" />
          <ColorSwatch $color={theme.colors.button} $name="Button Color" />
          <ColorSwatch $color={theme.colors.buttonText} $name="Button Text" />
          <ColorSwatch $color={theme.colors.icon} $name="Icon Color" />
        </ColorPalette>
      </Section>

      <Section>
        <Title>Widget Demo</Title>
        <Grid>
          <div>
            <h3>Book a Service</h3>
            <p style={{ marginBottom: '1rem', color: '#666' }}>
              Click the button below to open the booking widget
            </p>
            <BookButton 
              onClick={() => setIsPopupOpen(true)}
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.7 : 1 }}
            >
              {isLoading ? 'Loading...' : 'Book Now'}
            </BookButton>
          </div>
        </Grid>
        {isPopupOpen && (
          <BookingPopup 
            onClose={() => setIsPopupOpen(false)} 
            initialCategories={categories}
            initialEmployees={employees}
          />
        )}
      </Section>

      <Section>
        <Title>Development Notes</Title>
        <ul style={{ lineHeight: '1.6', color: '#666' }}>
          <li>The widget uses a modern, clean design with a pink color scheme</li>
          <li>Services are organized by categories (e.g., Waxing, Manicure, Pedicure)</li>
          <li>Each service shows its name, duration, and price</li>
          <li>The interface is responsive and works on all screen sizes</li>
          <li>Press ESC or click outside to close the popup</li>
        </ul>
      </Section>
    </DevContainer>
  );
};

export default DevPage;
