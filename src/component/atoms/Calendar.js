import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { formatDate, formatDate_day } from 'utils/formatDate';

import useWindowSize from 'hooks/useWindowSize';

const RESPONSIVE_WINDOW_SIZE = 1024;
const DESK_CALENDAR_HEIGHT = 600;
const MOBILE_CALENDAR_HEIGHT = 450;

const Btn = ({ arg }) => {
   const { _def, _instance } = arg.event;
   const { title } = _def;
   const { start, end } = _instance.range;
   
   return (
      <button 
         onClick={() => {
         console.log(title, formatDate(start), formatDate(end))
      }}>
         {arg.event._def.title}
      </button>
   );
};

function Calendar() {
   const windowResizeWidth = useWindowSize() > RESPONSIVE_WINDOW_SIZE ?  DESK_CALENDAR_HEIGHT : MOBILE_CALENDAR_HEIGHT;

   return (
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
         height={`${windowResizeWidth}px`}
         eventColor='#F6F8FC'
         dayCellContent={({ date }) => formatDate_day(date)}
      />
   );
};


export default Calendar;