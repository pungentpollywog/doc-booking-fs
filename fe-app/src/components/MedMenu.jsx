import { NavLink } from "react-router-dom";

import './MedMenu.scss';

export default function MedMenu() {
  return(
    <nav className="menu">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='service'>Service</NavLink>
      <NavLink to='contact'>Contact Us</NavLink> 
    </nav>
  )
}