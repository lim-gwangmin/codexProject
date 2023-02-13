import React from 'react';
import { fireBaseFunc } from 'firebaseSDK';
import { webPush } from 'api/webPushMessage';
import { useSelector, useDispatch } from 'react-redux';
import { webPushToken } from 'store/sliceReducer';
import logo from 'assets/images/logo.png';

function App(){
   const dispatch = useDispatch();
   const fireBaseToken = useSelector( state =>  state.sliceReducer.fireBaseToken);
   const [ push, setPush ] = React.useState({
      title:'',
      comment:'',
   });

   const getToken_FCM = async func => {
      await func().then( token => {
         dispatch(webPushToken(token));
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
      getToken_FCM(fireBaseFunc);
   }, []);

   return (
      <>
         <h1>Hello World!</h1>
         <input id='title'value={push.title} onChange={handleChange} placeholder='웹 푸시 타이틀'/>
         <input id='comment 'value={push.comment} onChange={handleChange} placeholder='웹 푸시 내용'/>
         <button onClick={() => webPush(push.title, push.comment, fireBaseToken)}>웹 푸시 발송!</button>

         <div id='wrap'>
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
         </div>
      </>
   )
}

export default App;