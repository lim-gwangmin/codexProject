import React from 'react';
import { firebaseApp } from './firebaseSDK';
import { webPush } from './api/webPushMessage';
// import { webPush } from 'api/webPushMessage';
import { useSelector, useDispatch } from 'react-redux';
// import { webPushToken } from 'store/sliceReducer';
import { webPushToken } from './store/sliceReducer';
// import logo from 'assets/images/logo.png';

const firebaseMessaging = firebaseApp.messaging();

firebaseMessaging.onMessage( payload  => {
   const { title, ...options } = payload.notification;
   console.log(payload.notification, '푸시 이벤트')
   
   return navigator.serviceWorker.getRegistration('/firebase-cloud-messaging-push-scope').then(registration => {
      registration.showNotification(
         title,
         options
      )});
});

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

         {/* <div id='wrap'>
            <header id='header'>
               <div className='container'>
                  <h1 className='logo'>
                     <a href='/'>
                        <img src={logo}/>
                     </a>
                  </h1>
                  <ul id='nav'>
                     <li>
                        <a className='active'>코딩</a>
                     </li>
                     <li>
                        <a>점메추</a>
                     </li>
                     <li>
                        <a>공지사항</a>
                     </li>
                  </ul>
                  <ul id='user'>
                     <li>
                        <button className='btn_alert'>
                           <img src=''/>
                        </button>
                     </li>
                     <li>
                        홍길동
                     </li>
                     <li>
                        <button className='btn_logOut'>
                           로그아웃
                        </button>
                     </li>
                  </ul>
               </div>
               <div id='main'>
                  <div className='container'>
                     <section className='section' id='section01'>
                        <article>

                        </article>
                        <article>

                        </article>
                     </section>  
                     <section className='section' id='section02'>
                        <article>

                        </article>
                        <article>

                        </article>
                     </section>  
                  </div>
               </div>
            </header>
         </div> */}
      </>
   )
}

export default App;