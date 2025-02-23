import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    host: true,
  },
  build: {
    // Optimize build for WordPress integration
    target: 'es2015',
    minify: command === 'build',
    cssMinify: command === 'build',
    rollupOptions: {
      input: {
        'booking-widget': './src/wordpress.tsx',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]',
        manualChunks: {
          'vendor': ['react', 'react-dom', 'styled-components'],
          'booking-core': [
            './src/components/ServiceCategorySelect',
            './src/components/EmployeeSelect',
            './src/components/ClientInfoForm',
            './src/components/ConfirmationSection'
          ]
        }
      }
    }
  },
  clearScreen: false,
  logLevel: 'info',
});
