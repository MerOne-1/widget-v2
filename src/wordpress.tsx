import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BookingPopup } from './components/BookingPopup';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

// Create a wrapper component that will be the entry point for WordPress
const WordPressBookingWidget: React.FC = () => {
  // Initialize state and data here before showing popup
  const [showPopup, setShowPopup] = React.useState(false);

    // Load data when component mounts
  React.useEffect(() => {
    const loadData = async () => {
      const [servicesModule, employeesModule] = await Promise.all([
        import('./types/services'),
        import('./types/employees')
      ]);
      
      window.__bookingWidgetData = {
        services: servicesModule.sampleServices,
        employees: employeesModule.sampleEmployees
      };
    };

    loadData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* Button that will be replaced by Elementor button */}
      <div id="booking-widget-trigger" style={{ display: 'none' }} />
      {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}
    </ThemeProvider>
  );
};

// Function to initialize the widget
function initBookingWidget() {
  const container = document.getElementById('booking-widget-container');
  if (!container) return;

  const root = createRoot(container);
  root.render(<WordPressBookingWidget />);

  // Listen for clicks on any element with the booking trigger class
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.booking-widget-trigger')) {
      const widgetInstance = document.querySelector('[data-widget="booking-widget"]');
      if (widgetInstance) {
        const root = createRoot(widgetInstance as HTMLElement);
        root.render(<BookingPopup onClose={() => root.unmount()} />);
      }
    }
  });
}

// Add to window object for WordPress access
declare global {
  interface Window {
    initBookingWidget: typeof initBookingWidget;
    showBookingPopup: () => void;
    __bookingWidgetData: {
      services?: any[];
      employees?: any[];
    };
  }
}

// Initialize widget and expose showBookingPopup function
window.initBookingWidget = initBookingWidget;
window.showBookingPopup = () => {
  const widgetInstance = document.querySelector('[data-widget="booking-widget"]');
  if (widgetInstance) {
    const root = createRoot(widgetInstance as HTMLElement);
    root.render(<BookingPopup onClose={() => root.unmount()} />);
  }
};
