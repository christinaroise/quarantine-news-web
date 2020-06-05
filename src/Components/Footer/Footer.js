import React from 'react';
import MenuFooter from '../Menu/MenuFooter/MenuFooter'
import './Footer.css'

function Footer() {
    return (
      <div className="footerWrapper">
        <div className="footer">
            <div className="footerTextContainer">
              <p>Developed by <b>[name].dev</b><br></br>Icons made by <a className="creditLink"
                href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
                className="creditLink" 
                href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></p>
            </div>
            <MenuFooter/>
        </div>
      </div>
    );
  }
  
  export default Footer;