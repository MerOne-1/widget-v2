// WordPress Integration Script
(function() {
  // Create container div if it doesn't exist
  let container = document.getElementById('booking-widget-root');
  if (!container) {
    container = document.createElement('div');
    container.id = 'booking-widget-root';
    document.body.appendChild(container);
  }

  // Load React and ReactDOM from CDN
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  // Initialize the widget
  const initializeWidget = async () => {
    try {
      // Replace these URLs with your actual production build URLs
      await loadScript('YOUR_BUILD_JS_URL');
      console.log('Booking widget loaded successfully');
    } catch (error) {
      console.error('Error loading booking widget:', error);
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWidget);
  } else {
    initializeWidget();
  }
})();
