import React from 'react';
import Logo from '../../../assets/images/LogoMEDD.png';
import Descri from "../../../assets/images/DescriBasLogo.png"
import Welco from "../../../assets/images/ImgWelcome2.png"
import ButtonStart from '../../Button/ButtonStart';


function Welcome() {
  return (
    <div className="App">
    <header className="App-header">
      <div className='App-logo'> 
        <img src={Logo} alt="logo" />
      </div>
      <div className='App-descri'> 
        <img src={Descri} alt="descri" />
      </div>
      <div className='App-welcom'> 
        <img src={Welco}  alt="welco" />
      </div>
      <ButtonStart />
     
    </header>
   
  </div>
  
  );
}

export default Welcome;