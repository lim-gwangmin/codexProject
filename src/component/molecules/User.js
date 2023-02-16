import { Link } from 'react-router-dom';

import { useModalContext } from 'hooks/useModalContext';
import { alert } from 'assets/imgModules/main/mainImgModule';

const ALERT_MODAL = 'alert_modal';

function User() {
   const { handleModalOpen } = useModalContext();

   return (
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
            <Link to='/' className='profile'>
               홍길동
            </Link>
         </li>
         <li>
            <button className='btn_logOut'>
               로그아웃
            </button>
         </li>
      </ul>
   );
};

export default User;