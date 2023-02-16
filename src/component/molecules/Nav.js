import { NavMenu } from "component/atoms";
import { ROUTE } from "constants/constants";

function Nav() {
   return (
      <ul id='nav'>
         {ROUTE.map((menu, index) => (
            <NavMenu 
            key={index} 
            path={menu.path} 
            title={menu.title}/>
         ))}
      </ul>
   );
};

export default Nav;