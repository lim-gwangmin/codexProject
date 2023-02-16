import { logo, alert } from 'assets/imgModules/main/mainImgModule';
import { useModalContext } from 'hooks/useModalContext';
import { Nav } from 'component/molecules';
const ALERT_MODAL = 'alert_modal';

function Header() {
   const { handleModalOpen } = useModalContext();

   return (
      <header id='header'>
         <div className='container'>
            <div className='flex_wrapper'>
               <h1 className='logo'>
                  <a href='/'>
                     <img src={logo}/>
                  </a>
               </h1>
               <Nav/>
            </div>
            <ul id='user'>
               <li>
                  <button 
                  className='btn_alert' 
                  onClick={() => handleModalOpen(ALERT_MODAL)}>
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
   )
};


export default Header