import React from 'react';
/*import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';*/
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="quiz__navbar">
        <div className="quiz__navbar-links">
          <div className="quiz__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="quiz__navbar-links_container">
            
          </div>
        </div>
    </div>
  )
}

export default Navbar