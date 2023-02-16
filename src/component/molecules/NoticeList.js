import React from 'react';
import { NoticeContent } from 'component/atoms';

function NoticeList() {
   const [ noticeList, setNoticeList ] = React.useState([
      {
         id:1,
         type:'notice_type01',
         text:'공지사항입니다.',
         date:'22-01-24'
      },
      {
         id:2,
         type:'notice_type02',
         text:'공지사항입니다.',
         date:'22-01-24'
      },
      {
         id:3,
         type:'notice_type03',
         text:'공지사항입니다.',
         date:'22-01-24'
      },
   ]);
   return (
      <ul className='notice_list'>
         {noticeList&&noticeList.map( list => (
            <NoticeContent 
               key={list.id}
               id={list.id}
               type={list.type}
               text={list.text}
               date={list.date}
            />
         ))}
      </ul>
   );
};

export default NoticeList;