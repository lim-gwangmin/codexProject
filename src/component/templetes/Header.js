import { Link } from 'react-router-dom';

import { logo } from 'assets/imgModules/main/mainImgModule';
import { Container } from 'component/atoms';
import { Nav, User } from 'component/molecules';
import { ROUTE } from 'constants/constants';

function Header() {

   return (
      <header id='header'>
         <Container>
            <div className='flex_wrapper'>
               <h1 className='logo'>
                  <Link to={ROUTE[0].path}>
                     <img src={logo}/>
                  </Link>
               </h1>
               <Nav/>
            </div>
            <User/>
         </Container>
      </header>
   )
};


export default Header