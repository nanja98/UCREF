import React from 'react';
import './Login.css'
import Logo from '../../../assets/images/LogoMEDD.png'


function CreateAccount() {


    return (
        <div className="Form-Creat">

        < div className="FormLog">

          <div className='App-logo'> 
            <img src={Logo} alt="logo" />
          </div>

          <h1 className='Welc'>Welcome to UCREF <br/>Project DataBase !</h1>

          <p>Create an account to access data and information.</p>

        </div>

      </div>

  )
  
}

export default CreateAccount;