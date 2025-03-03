import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function inspectBookings() {
  try {
    const bookingsRef = db.collection('bookings');
    const snapshot = await bookingsRef.get();
    
    console.log('\nAnalyzing all bookings:');
    snapshot.forEach(doc => {
      const booking = doc.data();
      const duration = booking.duration || 0;
      const calculatedDuration = booking.timeSlot ? 
        calculateDurationFromTimeSlot(booking.timeSlot.start, booking.timeSlot.end) : 0;
      
      if (duration === 0 || duration !== calculatedDuration) {
        console.log('\nFound booking with duration mismatch:', {
          id: doc.id,
          date: booking.date,
          timeSlot: booking.timeSlot,
          duration,
          calculatedDuration,
          serviceId: booking.serviceId,
          status: booking.status
        });
      }
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

inspectBookings();
