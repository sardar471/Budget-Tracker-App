import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navebar = () => {
  return (
   <nav className='main-wrapper'>

    <div className="navebar">
      <img className='logo' src='.\images\newlogo.png'/>
        <p>Budget Tracker</p>

    </div>
    <div className='login-icon'>
    <NavLink to="/" >
    <FontAwesomeIcon 
     
    className='user-icon' icon={faUserCircle }/>
    </NavLink>
    </div>
   

   </nav>
  )
}

export default Navebar;