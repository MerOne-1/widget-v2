import { initializeApp } from 'firebase-admin/app';

initializeApp();

export { syncWidgetData } from './widgetDataSync';
export { onBookingCreated, sendBookingReminders, onBookingCancelled } from './emailFunctions';
