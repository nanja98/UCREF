import React from 'react';
import './Welcome.css'
import Logo from '../../../assets/images/LogoMEDD.png';
import ButtonStart from '../../Button/ButtonStart'

function Welcome() {
  return (
    <div className="App">
      <div className="dashboard-container">
        <nav className="menu-horizontal">
          <div className="menu-left">
            <img src={Logo} alt="logo" />
          </div>
          <div className="menu-right">
          <ul>
              <li><a href="/login">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#about">Contact</a></li>

          </ul>
          </div>
        </nav>
        <div className="text-menu">
          <span className='text-titre'>UP-DB</span>
          <span className='text'>UCREF Project Database</span>
         
          <ButtonStart className='bouttonStart'/>
        </div>
      </div>
    </div>
  
  );
}

export default Welcome;