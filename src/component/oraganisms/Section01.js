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

function Section01(){
   return (
      <>
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
                     <span className='notice_title type01'>
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
                     <span className='notice_title type02'>
                        점메추
                     </span>
                     <a href='' className='comment'>
                        <span>
                           공지사항 입니다.공지사항 입니다.공지사항 입니다.공지사항 입니다.
                        </span>
                     </a>
                     <span className='date'>22-01-24</span>
                  </li>
                  <li>
                     <span className='notice_title type03'>
                        공지사항
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
      </>
   )
};

export default Section01;