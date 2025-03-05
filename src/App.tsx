import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import DevPage from './pages/DevPage';
import { useEffect, useState } from 'react';
import { BookingPopup } from './components/BookingPopup';
import { WidgetDataService } from './services/widgetDataService';
import { AvailabilityCacheService } from './services/availability/availabilityCache';
import { ServiceCategory } from './types/services';
import { Employee } from './types/employees';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  color: #000000;
`;

const Header = styled.h1`
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
  border-bottom: 2px solid #F5BBC9;
  padding-bottom: 10px;
`;

const TestBox = styled.div`
  background-color: #F5BBC9;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  color: #000000;
`;

function App() {
  const [isDirectMode, setIsDirectMode] = useState(false);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if direct mode is enabled via URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const directMode = urlParams.get('direct') === 'true';
    setIsDirectMode(directMode);

    // If in direct mode, load the data for the booking widget
    if (directMode) {
      const loadData = async () => {
        try {
          setIsLoading(true);
          
          // Load categories with services and employees from the widget data
          const [cats, emps] = await Promise.all([
            WidgetDataService.getServiceCategories(),
            WidgetDataService.getEmployees()
          ]);
          
          setCategories(cats);
          setEmployees(emps);

          // Preload availability data for all active employees
          const today = new Date();
          await Promise.all(
            emps.map(employee =>
              AvailabilityCacheService.preloadAvailability(employee, today)
            )
          );
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
    }
  }, []);

  // If in direct mode, show only the booking popup
  if (isDirectMode) {
    return (
      <>
        <GlobalStyles />
        <div style={{ padding: '0', margin: '0' }}>
          {isLoading ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>Loading booking widget...</div>
          ) : (
            <BookingPopup 
              onClose={() => {}} // Empty function since we don't want to close in direct mode
              initialCategories={categories}
              initialEmployees={employees}
              isDirectMode={true}
            />
          )}
        </div>
      </>
    );
  }

  // Regular development mode
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>Booking Widget Development</Header>
        <TestBox>
          If you can see this box with pink background, styled-components is working!
          <br />
          <strong>Test message - deployed at 13:53 on Feb 23</strong>
        </TestBox>
        <DevPage />
      </AppContainer>
    </>
  );
}

export default App;
