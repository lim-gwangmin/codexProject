import React from 'react';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import { useModalContext } from 'hooks/useModalContext';
import { menuCategory } from 'component/atoms';
import { ModalBackDrop } from 'component/molecules';

const AlertList = ({ id, type, date, text }) => {
   const MenuCategory = menuCategory[type];
   return (
      <li>
         <Link>
            <MenuCategory type={type}/>
            <span className='date'>{date}</span>
            <p>{text}</p>
         </Link>
         <button>
            <CgClose/>
         </button>
      </li>
   )
};

function Header() {
   
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
      <div id='alert_modal' className='modal_content_box' onClick={e => e.stopPropagation()}>
         <div id='alert_modal_header'>
            <h3>
               알림
            </h3>
            <nav>
               <ul>
                  <li>
                     <button className='active'>
                        전체
                     </button>
                  </li>
                  <li>
                     <button>
                        코당
                     </button>
                  </li>
                  <li>
                     <button>
                        점메추
                     </button>
                  </li>
                  <li>
                     <button>
                        공지사항
                     </button>
                  </li>
               </ul>
               <button>
                  전체삭제
               </button>
            </nav>
         </div>
         <ul id='alert_modal_body'>
            {noticeList&&noticeList.map( list => (
              <AlertList
               key={list.id}
               id={list.id}
               type={list.type}
               date={list.date}
               text={list.text}
              />
            ))}
         </ul>
      </div>
   );
};


const ModalAlert = () => {
   const { alertModal, handleAlertModalClose } = useModalContext();
  
   return (
      <>
         { 
            alertModal 
            && 
            <ModalBackDrop closeModal={handleAlertModalClose}>
               <Header />
            </ModalBackDrop>
         }
      </>
   );
};


export default ModalAlert;