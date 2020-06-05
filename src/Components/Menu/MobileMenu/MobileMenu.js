import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import HamburgerButton from '../../Universal/Buttons/HamburgerButton/HamburgerButton'
import './MobileMenu.css'

function scrollToTop() {
    window.scrollTo({
      top: 0
    });
  }
  
function MobileMenu(){
    return(
        <div className="mobileMenuContainer">
            <HamburgerButton/>
            <Fade>
                <div 
                id="mobileMenu"
                className="mobileMenu">
                    <NavLink 
                    smooth
                    to="/#home"
                    activeClassName="selected">Home</NavLink>
                    <NavLink 
                    smooth
                    to="/#benefits"
                    activeClassName="selected">Benefits</NavLink>
                    <NavLink 
                    smooth
                    to="/#features"
                    activeClassName="selected">Features</NavLink>
                    <NavLink 
                    smooth
                    to="/About"
                    activeClassName="selected"
                    onClick={() => scrollToTop()}>About</NavLink>
                </div>
            </Fade>
        </div>
    )
}

export default MobileMenu