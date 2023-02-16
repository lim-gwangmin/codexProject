
const CodangComponent = () => <span className='notice_title type01'>코당</span>
const MenuComponent = () => <span className='notice_title type02'>점메추</span>
const NoticeComponent = () => <span className='notice_title type03'>공지사항</span>


const components = {
   notice_type01: CodangComponent,
   notice_type02: MenuComponent,
   notice_type03: NoticeComponent,
};


function NoticeContent({ id, type, text, date }) {

   const Component = components[type];
   
   return (
      <li>
        <Component type={type}/>
         <a href='#' className='comment'>
            <span>{text}</span>
         </a>
         <span className='date'>{date}</span>
      </li>
   );
};

export default NoticeContent;