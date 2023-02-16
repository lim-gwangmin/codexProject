import menuCategory from './MenuCategory';

function NoticeContent({ id, type, text, date }) {

   const MenuCategory = menuCategory[type];
   
   return (
      <li>
        <MenuCategory type={type}/>
         <a href='#' className='comment'>
            <span>{text}</span>
         </a>
         <span className='date'>{date}</span>
      </li>
   );
};

export default NoticeContent;