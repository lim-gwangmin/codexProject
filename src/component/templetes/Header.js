import { logo, alert } from 'assets/imgModules/main/mainImgModule';

function Header() {
   return (
      <header id='header'>
         <div className='container'>
            <div className='flex_wrapper'>
               <h1 className='logo'>
                  <a href='/'>
                     <img src={logo}/>
                  </a>
               </h1>
               <ul id='nav'>
                  <li>
                     <a href='' className='active'>코딩</a>
                  </li>
                  <li>
                     <a href='' >점메추</a>
                  </li>
                  <li>
                     <a href='' >공지사항</a>
                  </li>
               </ul>
            </div>
            <ul id='user'>
               <li>
                  <button className='btn_alert'>
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