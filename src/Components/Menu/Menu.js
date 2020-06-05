import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import MobileMenu from '../Menu/MobileMenu/MobileMenu'
import Button from '../Universal/Buttons/Button/Button'
import './Menu.css'

function scrollToTop() {
    window.scrollTo({
      top: 0
    });
  }
  
function Menu(){
    return(
      <div className="menuContainer">
          <div className="desktopMenuWrapper">
            <div className="desktopMenuContainer">
              <NavLink 
              smooth
              to="/#home"
              activeClassName="selected">Home</NavLink>
              <NavLink 
              smooth
              to="/#benefits">Benefits</NavLink>
              <NavLink 
              smooth
              to="/#features">Features</NavLink>
              <NavLink 
              smooth
              to="/About"
              activeClassName="selected"
              onClick={() => scrollToTop()}>About</NavLink>
            </div>
            <Button 
            href="https://github.com/christinaroise/Quarantine"
            text="Download"/>
        </div>
        <MobileMenu/>
      </div>
    )
}

export default Menu