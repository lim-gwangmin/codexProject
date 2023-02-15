import React from 'react';
import { fireBaseFunc } from 'firebaseSDK';
import { webPush } from 'api/webPushMessage';
import { useSelector, useDispatch } from 'react-redux';
import { webPushToken } from 'store/sliceReducer';
import { WrapperContainer, Header, Main, MainSection } from 'component/templetes';
import { Section01 ,Section02 } from 'component/oraganisms';

// 
import pencil from 'assets/icon/icon_pencil.png';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { formatDate, formatDate_day } from 'utils/formatDate';

const CALENDAR_HEIGHT = 600;

const Btn = ({ arg }) => {
   const { _def, _instance } = arg.event;
   const { title } = _def;
   const { start, end } = _instance.range;
   
   return <button onClick={() => {
      console.log(title, formatDate(start), formatDate(end))
   }}>{arg.event._def.title}</button>
};
//

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
         <WrapperContainer>
            <Header/>
            <Main>
               <MainSection id={'section01'}>
                  <Section01/>
               </MainSection>
               <MainSection id={'section02'}>
                  <Section02/>
               </MainSection>
            </Main>
         </WrapperContainer>

         {/* <div id='alert_modal' className='modal_background'>
            <div className='modal_content_box'>
               <div className='alert_modal_header'>
                  <h3>알림</h3>
                  <div className='menu_wrapper'>
                     <nav id='alert_nav'>
                        <button className='on'>전체</button>
                        <button>코당</button>
                        <button>점메추</button>
                        <button>공지사항</button>
                     </nav>
                     <button id='delete_alert_all'>전체삭제</button>
                  </div>
               </div>
            </div>
         </div> */}
      </>
   )
}

export default App;