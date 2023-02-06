importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js"
);

firebase.initializeApp({
   apiKey: "AIzaSyBtvbqA28mbqZYZqINF6KUOhcrJfa3INUU",
   authDomain: "codex-project-b4939.firebaseapp.com",
   projectId: "codex-project-b4939",
   storageBucket: "codex-project-b4939.appspot.com",
   messagingSenderId: "558480223114",
   appId: "1:558480223114:web:05d36364cbf0f8284c3673",
   measurementId: "G-X1PJ1T37DE"
});

const messaging = firebase.messaging();


self.addEventListener("install", function (e) {
   console.log("fcm sw install..");
   self.skipWaiting();
 });
 
 self.addEventListener("activate", function (e) {
   console.log("fcm sw activate..");
 });

 self.addEventListener("push", function (e) {
   if (!e.data.json()) return;
 
   const resultData = e.data.json().notification;
   const notificationTitle = resultData.title;
   const notificationOptions = {
     body: resultData.body,
     icon: resultData.image, // 웹 푸시 이미지는 icon
     tag: resultData.tag,
   };
   
   self.registration.showNotification(notificationTitle, notificationOptions);
 });

 self.addEventListener("notificationclick", function (event) {
   console.log("notification click");
   const url = "/";
   event.notification.close();
   event.waitUntil(clients.openWindow(url));
 });
