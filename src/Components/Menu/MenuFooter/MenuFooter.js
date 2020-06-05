import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './MenuFooter.css'

const MenuFooter = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0
    });
  }

  function showTermsOfService () {
    const TermsOfService = document.getElementById("TermsOfService");

    TermsOfService.style.setProperty('display', 'flex');

  }
    return(
        <div className="menuFooterContainer">
          <div className="menuFooter">
            <NavLink 
            smooth
            to="/#home"
            activeClassName="selected">Home</NavLink>
            <NavLink 
            smooth
            to="/About"
            activeClassName="selected"
            onClick={() => scrollToTop()}>About</NavLink>
            <a onClick={() => showTermsOfService()}>Terms of Service</a>
            <a 
            href="https://github.com/christinaroise/Quarantine"
            target="_blank">Download</a>
        </div>
      </div>
    )
}

export default MenuFooter