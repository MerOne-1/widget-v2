import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { getFirestore } from 'firebase-admin/firestore';

const db = getFirestore();
db.settings({ ignoreUndefinedProperties: true });
const widgetDataRef = db.collection('widgetData').doc('latest');

export const syncWidgetData = onDocumentWritten(
  '{collection}/{docId}',
  async (event) => {
    try {
      // Only sync if the document is in one of our tracked collections
      const collection = event.params.collection;
      const trackedCollections = ['serviceCategories', 'services', 'employees', 'bookings'];
      if (!trackedCollections.includes(collection)) {
        return;  // Return undefined is fine for Cloud Functions v2
      }

      // Start a transaction to ensure data consistency
      await db.runTransaction(async (transaction) => {
        // Get all data in parallel
        const [categoriesSnapshot, servicesSnapshot, employeesSnapshot, bookingsSnapshot] = 
          await Promise.all([
            transaction.get(db.collection('serviceCategories')),
            transaction.get(db.collection('services')),
            transaction.get(db.collection('employees')),
            transaction.get(db.collection('bookings'))
          ]);

        // Process service categories and their services
        const serviceCategories: Record<string, any> = {};
        categoriesSnapshot.docs.forEach(categoryDoc => {
          const category = categoryDoc.data();
          serviceCategories[categoryDoc.id] = {
            id: categoryDoc.id,
            name: category.name,
            description: category.description,
            order: category.order,
            active: category.active,
            services: {}
          };
        });

        // Add services to their categories
        servicesSnapshot.docs.forEach(serviceDoc => {
          const service = serviceDoc.data();
          if (serviceCategories[service.categoryId]) {
            serviceCategories[service.categoryId].services[serviceDoc.id] = {
              id: serviceDoc.id,
              name: service.name,
              duration: service.duration,
              price: service.price,
              description: service.description,
              order: service.order,
              active: service.active
            };
          }
        });

        // Process professionals and their bookings
        const professionals: Record<string, any> = {};
        employeesSnapshot.docs.forEach(employeeDoc => {
          const employee = employeeDoc.data();
          professionals[employeeDoc.id] = {
            id: employeeDoc.id,
            name: employee.name,
            role: employee.role,
            active: employee.active,
            services: employee.services,
            schedule: employee.schedule,
            bookings: {}
          };
        });

        // Add bookings to their professionals
        bookingsSnapshot.docs.forEach(bookingDoc => {
          const booking = bookingDoc.data();
          if (professionals[booking.employeeId]) {
            const dateKey = booking.date;  // Using the date as is for now
            if (!professionals[booking.employeeId].bookings[dateKey]) {
              professionals[booking.employeeId].bookings[dateKey] = {};
            }
            professionals[booking.employeeId].bookings[dateKey][bookingDoc.id] = {
              timeSlot: booking.timeSlot || null,
              serviceId: booking.serviceId || null,
              status: booking.status || 'pending',
              duration: booking.duration || 0
            };
          }
        });

        // Update the widget data document
        await transaction.set(widgetDataRef, {
          lastUpdated: new Date(),
          serviceCategories,
          professionals
        });
      });

      console.log('Widget data synchronized successfully');
    } catch (error) {
      console.error('Error synchronizing widget data:', error);
      throw error;
    }
  }
);
