import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPvgVEb4mQT_ztsZG7MVQ8tgj1VOlA4iU",
  authDomain: "widget-v2-2dee9.firebaseapp.com",
  projectId: "widget-v2-2dee9",
  storageBucket: "widget-v2-2dee9.firebasestorage.app",
  messagingSenderId: "634987876869",
  appId: "1:634987876869:web:59ce3fa9e7e5819350826c",
  measurementId: "G-1B6B44V6FR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function listCollections() {
  try {
    // Check employees collection for schedule structure
    console.log('\nChecking employees schedule structure:');
    const employeesSnapshot = await getDocs(collection(db, 'employees'));
    if (!employeesSnapshot.empty) {
      const firstEmployee = employeesSnapshot.docs[0].data();
      console.log('Weekly Schedule Structure:', JSON.stringify(firstEmployee.schedule.weeklySchedule, null, 2));
      console.log('\nExceptions Structure:', JSON.stringify(firstEmployee.schedule.exceptions, null, 2));
    }
  } catch (error) {
    console.error("Error checking schedule structure:", error);
  }
}

listCollections();
