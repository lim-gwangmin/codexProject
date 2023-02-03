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
 });

// firebase.initializeApp(config);

// const messaging = firebase.messaging();

// //사용자에게 허가를 받아 토큰을 가져옵니다.
// messaging.requestPermission()
// .then(function() {
// 	return messaging.getToken(); 
// })
// .then(function(token) {
// 	console.log(token);
// })
// .catch(function(err) {
// 	console.log('fcm error : ', err);
// })

// messaging.onMessage(function(payload){
// 	console.log(payload.notification.title);
// 	console.log(payload.notification.body);
// })

function App(){
   return (
      <h1>Hello World!</h1>
   )
}

export default App;