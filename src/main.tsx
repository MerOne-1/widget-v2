import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { theme } from './styles/theme';

console.log('Starting application initialization...');
console.log('React version:', React?.version);
console.log('Environment:', import.meta.env.MODE);

function initializeApp() {
  console.log('Looking for root element...');
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('Root element not found! This is a critical error.');
  }

  console.log('Root element found, clearing any existing content...');
  // Clear any existing content but keep the element
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  console.log('Creating React root...');
  const reactRoot = createRoot(root);

  console.log('Rendering React application...');
  reactRoot.render(
    <StrictMode>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StrictMode>
  );

  console.log('Initial render completed.');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  console.log('Document still loading, waiting for DOMContentLoaded...');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired, initializing app...');
    initializeApp();
  });
} else {
  console.log('Document already loaded, initializing app immediately...');
  initializeApp();
}

// Handle any uncaught errors
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

