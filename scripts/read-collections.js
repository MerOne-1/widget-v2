import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

// Read service account key
const serviceAccount = JSON.parse(
  readFileSync('/Users/merwanmez/Downloads/widget-v2-2dee9-firebase-adminsdk-fbsvc-e0c51c6dd0.json')
);

// Initialize Firebase Admin
const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function readCollections() {
  try {
    // Read service categories
    console.log('\n=== Service Categories ===');
    const categoriesSnapshot = await db.collection('serviceCategories').get();
    categoriesSnapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });

    // Read services
    console.log('\n=== Services ===');
    const servicesSnapshot = await db.collection('services').get();
    servicesSnapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });

    // Read employees
    console.log('\n=== Employees ===');
    const employeesSnapshot = await db.collection('employees').get();
    employeesSnapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });

    // Read bookings
    console.log('\n=== Bookings ===');
    const bookingsSnapshot = await db.collection('bookings').get();
    bookingsSnapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });

    // Read holidays
    console.log('\n=== Holidays ===');
    const holidaysSnapshot = await db.collection('holidays').get();
    holidaysSnapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (error) {
    console.error('Error reading collections:', error);
  }
}

readCollections();
