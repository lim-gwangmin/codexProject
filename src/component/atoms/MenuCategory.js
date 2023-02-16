const CodangComponent = () => <span className='notice_title type01'>코당</span>
const MenuComponent = () => <span className='notice_title type02'>점메추</span>
const NoticeComponent = () => <span className='notice_title type03'>공지사항</span>


const menuCategory = {
   notice_type01: CodangComponent,
   notice_type02: MenuComponent,
   notice_type03: NoticeComponent,
};


export default menuCategory;
