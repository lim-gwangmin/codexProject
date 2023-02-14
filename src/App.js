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
import pencil from 'assets/icon/icon_pencil.png';

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
                     <article className='calendar_wrapper'>
                        <div className='colum_area'> 
                           <FullCalendar
                              buttonText={{today:'오늘'}}
                              locale={'ko'}
                              plugins={[ dayGridPlugin ]}
                              weekends={false}
                              events={[
                                 { title: '임광민1', date: '2023-02-06', end: '2023-02-11' },
                                 { title: '임광민2', date: '2023-02-13', end: '2023-02-18' },
                                 { title: '임광민3', date: '2023-02-27', end: '2023-03-04' }
                              ]}
                              eventContent={(arg) =>  <Btn arg={arg}/>}
                              height={`${CALENDAR_HEIGHT}px`}
                              eventColor='#F6F8FC'
                              dayCellContent={({ date }) => formatDate_day(date)}
                           />
                        </div>
                     </article>
                     <article className='notice_wrapper'>
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
                     </article>
                  </section>  
                  <section className='section' id='section02'>
                     <article className='evrynSwork_wrapper'>
                        <div className='colum_area'>
                           <div className='evrynSwork_header'>
                              <h2>모두의 일</h2>
                              <button className='btn_evrynSwork_list'>
                                 <img src={pencil}/>
                              </button>
                           </div>
                           <ul className='check_list'>
                              <li>
                                 개인 쓰레기통 스스로 비우기
                                 <span>
                                    (금요일 필수!)
                                 </span>
                              </li>
                              <li>
                                 정수기,커피머신,싱크대 주변에 튄 물 닦기
                              </li>
                              <li>
                                 마지막 퇴근 직원은 모든 문,에어컨,전등,노래 등 단속하기
                              </li>
                           </ul>
                        </div>
                     </article>
                     <article className='duty_wrapper'>
                        <div className='colum_area'>
                           <div className='duty_header'>
                              <h2>당번의 일</h2>
                              <button className='btn_duty_list'>
                                 <img src={pencil}/>
                              </button>
                           </div>
                           <ul className='check_list col2'>
                              <li>
                                 설거지하기, 싱크대 배수망 비우기
                              </li>
                              <li>
                                 대표님,팀장님 쓰레기통 비우기
                                 <span>
                                    (금)
                                 </span>
                              </li>
                              <li>
                                 커피 머신, 정수기 물 받침대 설거지하기 
                                 <span>
                                    (수,금)
                                 </span>
                              </li>
                              <li>
                                 음료수 냉장고 우측 상단의 불 끄기
                                 <span>
                                    (금)
                                 </span>
                              </li>
                              <li>
                                 일반, 음식물 쓰레기, 분리수거 정리 및 분리배출
                                 <span>
                                    (금, 모두 다같이!)
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </article>
                  </section>  
               </div>
            </div>
         </div>
      </>
   )
}

export default App;