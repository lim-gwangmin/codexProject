importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js");

firebase.initializeApp({
   apiKey: "AIzaSyBtvbqA28mbqZYZqINF6KUOhcrJfa3INUU",
   authDomain: "codex-project-b4939.firebaseapp.com",
   databaseURL: 'codex-project-b4939.firebaseio.com',
   projectId: "codex-project-b4939",
   storageBucket: "codex-project-b4939.appspot.com",
   messagingSenderId: "558480223114",
   appId: "1:558480223114:web:05d36364cbf0f8284c3673",
   measurementId: "G-X1PJ1T37DE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
   console.log('background push event', payload);
   // Customize notification here
   const notificationTitle = 'Background Message Title';
   const notificationOptions = {
     body: 'Background Message body.',
     icon: '/firebase-logo.png'
   };
 
   self.registration.showNotification(notificationTitle, notificationOptions);
 });