// const CACHE_NAME = 'whatsapp-clone-v1';
// const urlsToCache = ['/', '/favicon.ico'];

// // Install event
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
//   );
// });

// // Activate event
// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames
//           .filter((cacheName) => {
//             return (
//               cacheName.startsWith('whatsapp-clone-') &&
//               cacheName !== CACHE_NAME
//             );
//           })
//           .map((cacheName) => {
//             return caches.delete(cacheName);
//           })
//       );
//     })
//   );
// });

// // Fetch event
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request).then((response) => {
//         if (!response || response.status !== 200 || response.type !== 'basic') {
//           return response;
//         }
//         const responseToCache = response.clone();
//         caches
//           .open(CACHE_NAME)
//           .then((cache) => cache.put(event.request, responseToCache));
//         return response;
//       });
//     })
//   );
// });

// // Background sync
// self.addEventListener('sync', (event) => {
//   if (event.tag === 'sync-messages') {
//     event.waitUntil(syncMessages());
//   }
// });

// async function syncMessages() {
//   try {
//     const messages = await getPendingMessages();
//     for (const message of messages) {
//       await sendMessage(message);
//       await markMessageAsSent(message.id);
//     }
//   } catch (error) {
//     console.error('Error syncing messages:', error);
//   }
// }

// // Push notifications
// self.addEventListener('push', (event) => {
//   const data = event.data.json();
//   event.waitUntil(
//     self.registration.showNotification(data.title, {
//       body: data.body,
//       icon: '/icon-192x192.png',
//       data: data,
//     })
//   );
// });

// self.addEventListener('notificationclick', (event) => {
//   event.notification.close();
//   event.waitUntil(clients.openWindow(event.notification.data.url));
// });
