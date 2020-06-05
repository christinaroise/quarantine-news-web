import React from 'react'
import './HamburgerButton.css'

const HamburgerButton = () =>{
    function showMenu () {
        const openMobMenuButton = document.getElementById("openMobMenuButton");
        const exitMobMenuButton = document.getElementById("exitMobMenuButton");
        const mobileMenu = document.getElementById("mobileMenu")
    
        openMobMenuButton.style.setProperty('display', 'none');
        exitMobMenuButton.style.setProperty('display', 'block');
        mobileMenu.style.setProperty('display', 'grid');
      }
      function hideMenu () {
        const openMobMenuButton = document.getElementById("openMobMenuButton");
        const exitMobMenuButton = document.getElementById("exitMobMenuButton");
        const mobileMenu = document.getElementById("mobileMenu")
    
        openMobMenuButton.style.setProperty('display', 'block');
        exitMobMenuButton.style.setProperty('display', 'none');
        mobileMenu.style.setProperty('display', 'none');
    
      }
    return(
        <div 
        id="toggleMobileMenuButton"
        className="hamburgerButtonContainer">
            <div id="openMobMenuButton">
                <button 
                className="hamburgerButton"
                onClick = { () => {showMenu()}}>
                    <svg height="2rem" viewBox="0 -66 335.628 335" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="m328.628906 188.3125h-321.628906c-3.867188 0-7 3.136719-7 7 0 3.867188 3.132812 7 7 7h321.628906c3.863282 0 7-3.132812 7-7 0-3.863281-3.136718-7-7-7zm0 0"/><path d="m328.628906 94.3125h-321.628906c-3.867188 0-7 3.136719-7 7 0 3.867188 3.132812 7 7 7h321.628906c3.863282 0 7-3.132812 7-7 0-3.863281-3.136718-7-7-7zm0 0"/><path d="m328.628906.3125h-321.628906c-3.867188 0-7 3.136719-7 7 0 3.867188 3.132812 7 7 7h321.628906c3.863282 0 7-3.132812 7-7 0-3.863281-3.136718-7-7-7zm0 0"/></svg>
                </button>
            </div>
            <div id="exitMobMenuButton">
              <button 
              className="hamburgerButton"
              onClick = { () => {hideMenu()}}>
                <svg id="Capa_1" enableBackground="new 0 0 413.348 413.348" height="1.5rem" viewBox="0 0 413.348 413.348" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>
              </button>
            </div>
        </div>
    )
}

export default HamburgerButton