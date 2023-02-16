import { NavLink, Link } from 'react-router-dom';

function NavMenu({ path, title}) {
   return (
      <li>
         <NavLink
         to={path}
         className={({ isActive }) => isActive ? 'active' : undefined}>
            {title}
         </NavLink>
      </li>
   );
};

export default NavMenu;