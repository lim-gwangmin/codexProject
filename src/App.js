import React from 'react';
import { firebaseApp } from './firebase'; 

const firebaseMessaging = firebaseApp.messaging();
firebaseMessaging
  .requestPermission()
  .then(() => {
    return firebaseMessaging.getToken(); // 등록 토큰 받기
  })
  .then(function (token) {
    console.log(token); //토큰 출력
  })
  .catch(function (error) {
    console.log("FCM Error : ", error);
  });
  
  firebaseMessaging.onMessage((payload) => {
   console.log(payload.notification.title);
   console.log(payload.notification.body);
   console.log("Message received. ", payload);
   const { title, ...options } = payload.notification;
   //Show the notification :)
   return navigator.serviceWorker.getRegistration('/firebase-cloud-messaging-push-scope').then(registration => {
      registration.showNotification(
         title,
         options
      )});
 });


function App(){
   return (
      <h1>Hello World!</h1>
   )
}

export default App;