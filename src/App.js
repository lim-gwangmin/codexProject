import React from 'react';
import { fireBaseFunc } from 'firebaseSDK';
import { webPush } from 'api/webPushMessage';
import { useSelector, useDispatch } from 'react-redux';
import { webPushToken } from 'store/sliceReducer';
import { formatDate, formatDate_day } from 'utils/formatDate';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import logo from 'assets/images/logo.png';
import alert from 'assets/icon/icon_alert.png';


const CALENDAR_HEIGHT = 600;

const Btn = ({ arg }) => {
   const { _def, _instance } = arg.event;
   const { title } = _def;
   const { start, end } = _instance.range;
   
   return <button onClick={() => {
      console.log(title, formatDate(start), formatDate(end))
   }}>{arg.event._def.title}</button>
};

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
         <div style={{display:'none'}}>
            <input id='title'value={push.title} onChange={handleChange} placeholder='웹 푸시 타이틀'/>
            <input id='comment 'value={push.comment} onChange={handleChange} placeholder='웹 푸시 내용'/>
            <button onClick={() => webPush(push.title, push.comment, fireBaseToken)}>웹 푸시 발송!</button>
         </div>
         <div id='wrap'>
            <header id='header'>
               <div className='container'>
                  <div className='flex_wrapper'>
                     <h1 className='logo'>
                        <a href='/'>
                           <img src={logo}/>
                        </a>
                     </h1>
                     <ul id='nav'>
                        <li>
                           <a href='' className='active'>코딩</a>
                        </li>
                        <li>
                           <a href='' >점메추</a>
                        </li>
                        <li>
                           <a href='' >공지사항</a>
                        </li>
                     </ul>
                  </div>
                  <ul id='user'>
                     <li>
                        <button className='btn_alert'>
                           <img src={alert}/>
                           <span className='alert'>
                              1
                           </span>
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
            </header>
            <div id='main'>
                  <div className='container'>
                     <section className='section' id='section01'>
                        <article>
                           <div className='calendar_wrapper'>
                              <div className='colum_area'> 
                                 <FullCalendar
                                    locale={'ko'}
                                    plugins={[ dayGridPlugin ]}
                                    events={[
                                       { title: '임광민', date: '2023-02-13', end: '2023-02-18' },
                                       { title: 'event 2', date: '2023-02-20', end: '2023-02-25' }
                                    ]}
                                    eventContent={(arg) =>  <Btn arg={arg}/>}
                                    height={`${CALENDAR_HEIGHT}px`}
                                    // formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
                                 />
                              </div>
                           </div>
                           <div className='notice_wrapper'> 
                              <div className='colum_area'>
                                 <div className='notice_header'>
                                    <h2>공지사항</h2>
                                    <a href='' className='btn_notice_table'>
                                       <HiOutlineArrowSmRight className='HiOutlineArrowSmRight'/>
                                    </a>
                                 </div>
                                 <ul className='notice_list'>
                                    <li>
                                       <span className='title type01'>
                                          코당
                                       </span>
                                       <a href='' className='comment'>
                                          <span>
                                             공지사항 입니다.공지사항 입니다.공지사항 입니다.공지사항 입니다.
                                          </span>
                                       </a>
                                       <span className='date'>22-01-24</span>
                                    </li>
                                    <li>
                                       <span className='title type02'>
                                          점메추
                                       </span>
                                       <a href='' className='comment'>
                                          <span>
                                             공지사항 입니다.공지사항 입니다.공지사항 입니다.공지사항 입니다.
                                          </span>
                                       </a>
                                       <span className='date'>22-01-24</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
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
         </div>
      </>
   )
}

export default App;