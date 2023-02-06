import React from 'react';
import { firebaseApp } from './firebase'; 
import { webPush } from './api/webPushMessage';
import { useSelector, useDispatch } from 'react-redux';
import { webPushToken } from './store/sliceReducer';

const firebaseMessaging = firebaseApp.messaging();

firebaseMessaging.onMessage( payload  => {
   const { title, ...options } = payload.notification;
   //Show the notification :)
   return navigator.serviceWorker.getRegistration('/firebase-cloud-messaging-push-scope').then(registration => {
      registration.showNotification(
         title,
         options
      )});
});
const fireBaseFunc = () => {

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

};

function App(){
   const dispatch = useDispatch();
   const fireBaseToken = useSelector( state =>  state.sliceReducer.fireBaseToken);
   const [ push, setPush ] = React.useState({
      title:'',
      comment:'',
   })
   const fireBaseFunc = async () => {
      await firebaseMessaging
      .requestPermission()
      .then(() => {
         return firebaseMessaging.getToken(); // 등록 토큰 받기
      })
      .then(function (token) {
         dispatch(webPushToken(token))
      })
      .catch(function (error) {
         console.log("FCM Error : ", error);
      });
   };

   const handleChange = e => {
      const targetID = e.target.id;
      if(targetID === 'title' ) {
         setPush({...push, title: e.target.value});
      } else {
         setPush({...push, comment: e.target.value});
      }
   };

   React.useEffect(() => {
      fireBaseFunc();
   }, []);

   return (
      <>
      <h1>Hello World!</h1>
         <input id='title'value={push.title} onChange={handleChange} placeholder='웹 푸시 타이틀'/>
         <input id='comment 'value={push.comment} onChange={handleChange} placeholder='웹 푸시 내용'/>
         <button onClick={() => webPush(push.title, push.comment, fireBaseToken)}>웹 푸시 발송!</button>
      </>
   )
}

export default App;