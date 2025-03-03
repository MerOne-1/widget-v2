import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function calculateDurationFromTimeSlot(start, end) {
  if (!start || !end) return 0;
  
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);
  
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  
  return endMinutes - startMinutes;
}

async function fixBookings() {
  try {
    const bookingsRef = db.collection('bookings');
    const snapshot = await bookingsRef.get();
    
    const batch = db.batch();
    let updateCount = 0;

    snapshot.forEach(doc => {
      const booking = doc.data();
      
      // Check if this is an invalid booking
      if (booking.timeSlot && (!booking.duration || booking.duration === 0)) {
        const calculatedDuration = calculateDurationFromTimeSlot(
          booking.timeSlot.start, 
          booking.timeSlot.end
        );
        
        if (calculatedDuration > 0) {
          console.log(`Fixing booking ${doc.id}:`, {
            before: booking.duration,
            after: calculatedDuration,
            timeSlot: booking.timeSlot
          });
          
          batch.update(doc.ref, { 
            duration: calculatedDuration,
            updatedAt: admin.firestore.Timestamp.now()
          });
          updateCount++;
        }
      }
    });

    if (updateCount > 0) {
      await batch.commit();
      console.log(`Successfully updated ${updateCount} bookings`);
    } else {
      console.log('No bookings needed fixing');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit();
  }
}

fixBookings();
