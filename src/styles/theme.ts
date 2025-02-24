export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
} as const;

export const theme = {
  colors: {
    containerBorder: '#000000',
    border: '#F5BBC9',
    title: '#000000',
    text: '#000000',
    buttonText: '#FFFFFF',
    button: '#000000',
    icon: '#F5BBC9',
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    title: {
      size: '18px',
      weight: 600,
      transform: 'uppercase',
    },
    text: {
      size: '14px',
      weight: 400,
      transform: 'none',
    },
    button: {
      size: '14px',
      weight: 600,
      transform: 'uppercase',
    },
  },
  borderRadius: {
    button: '5px',
    default: '5px',
  },
};
