import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function inspectCollections() {
  try {
    const collections = await db.listCollections();
    console.log('Collections:');
    for (const collection of collections) {
      console.log(`\nCollection: ${collection.id}`);
      const snapshot = await collection.get();
      console.log(`Documents: ${snapshot.size}`);
      
      // Get first document as sample
      if (snapshot.size > 0) {
        const sampleDoc = snapshot.docs[0];
        console.log('\nSample document structure:');
        console.log(JSON.stringify(sampleDoc.data(), null, 2));
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit();
  }
}

inspectCollections();
