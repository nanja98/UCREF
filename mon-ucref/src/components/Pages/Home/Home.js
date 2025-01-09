import React, { Component } from 'react';
import Logo from '../../../assets/images/LogoMEDD.png';
import ImgConx from'../../../assets/images/ImgLogin1.png'
import './Home.css'
class Home extends Component {
  render() {
    return (
      <div className="Form-conx">

        < div className="FormLog">
          <div className='App-logo'> 
            <img src={Logo} alt="logo" />
          </div>
          <h1>Welcome to UCREF <br/>Project DataBase !</h1>
          <p>Enter to get access to data & information.</p>
        </div>

        <div className="FormImag">
          <div className='Img-conx'> 
            <img src={ImgConx} alt="ImgConx" />
          </div>
        </div>

      </div>
    )
  }
}

export default Home;