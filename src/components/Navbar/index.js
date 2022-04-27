import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from '../images/logo.png'; 
import { withRouter } from 'react-router-dom';
const Navbar = () => {
  return (
                   
    <>
      <Nav>
        <NavLink to='/'>
        <a href='../images/logo.png' className="logo"><img className="logo" src={logo} alt="logo"/></a>
         
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/ConnectToAWS'>Connect To AWS</NavBtnLink>
        </NavBtn>
      </Nav>

     
    
    </>
 
  );
};

export default withRouter(Navbar);
