import React from 'react';
import Menu from '../Menu/Menu'
import './Header.css'

function Home() {
    return (
      <div className="headerContainer">
        <div className="header">
          <div className="headerLeftSide">
              <h1 className="logoTitle">[name].dev</h1>
          </div>
          <div className="headerRightSide">
            <Menu/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;