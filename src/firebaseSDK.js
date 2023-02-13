import firebase from 'firebase';
import webPusgIcon from 'assets/icon/icon_webPush.png';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseMessaging = firebaseApp.messaging();

const pushMessage = firebaseMessaging.onMessage( payload  => {
   const { title, ...options } = payload.notification;
   const option = {
      body: options.body,
      tag: options.tag,
      icon: webPusgIcon,
   }
   return navigator.serviceWorker.getRegistration('/firebase-cloud-messaging-push-scope').then(registration => {
      registration.showNotification(title, option)});
});

export const fireBaseFunc = () => {
   return firebaseMessaging
   .requestPermission()
   .then(() => {
      return firebaseMessaging.getToken(); // 등록 토큰 받기
   })
   .then(function (token) {
      return token;
   })
   .catch(function (error) {
      console.log("FCM Error : ", error);
   });
};