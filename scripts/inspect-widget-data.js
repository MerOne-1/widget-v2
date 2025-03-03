import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function inspectWidgetData() {
  try {
    const widgetDataRef = db.collection('widgetData').doc('latest');
    const doc = await widgetDataRef.get();
    const data = doc.data();

    // Check each professional's bookings
    Object.entries(data.professionals || {}).forEach(([profId, prof]) => {
      console.log(`\nChecking bookings for professional: ${prof.name}`);
      
      Object.entries(prof.bookings || {}).forEach(([date, dateBookings]) => {
        Object.entries(dateBookings).forEach(([bookingId, booking]) => {
          if (!booking.serviceId || booking.duration === 0) {
            const calculatedDuration = booking.timeSlot ? 
              calculateDurationFromTimeSlot(booking.timeSlot.start, booking.timeSlot.end) : 0;
            
            console.log('\nFound invalid booking:', {
              professionalId: profId,
              professionalName: prof.name,
              date,
              bookingId,
              booking,
              calculatedDuration
            });
          }
        });
      });
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit();
  }
}

function calculateDurationFromTimeSlot(start, end) {
  if (!start || !end) return 0;
  
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);
  
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  
  return endMinutes - startMinutes;
}

inspectWidgetData();
