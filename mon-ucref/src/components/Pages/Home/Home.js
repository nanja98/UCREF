import React , { useState }from 'react';
import Logo from '../../../assets/images/LogoMEDD.png';
import ImgConx from'../../../assets/images/ImgLogin1.png'
import './Home.css'
import ButtonConnexion from '../../Button/ButtonConnexion';
import { Link } from 'react-router-dom';


function Home() {

  const username =""
  const password= ""

  // checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Traitement données 
    console.log("Username:", username);
    console.log("Password:", password);
  };


  // gérer le changement d'état
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
    return (
      <div className="Form-conx">

        < div className="FormLog">

          <div className='App-logo'> 
            <img src={Logo} alt="logo" />
          </div>

          <h1 className='Welc'>Welcome to UCREF <br/>Project DataBase !</h1>

          <p>Enter to get access to data & information.</p>

          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              placeholder="Entrez votre nom d'utilisateur"
              value={username}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              required
            />
          </div>

          <div className='Form-quest'>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Remenber me
            </label>
            <label>   
              <Link to="/home">
                Forgot your password?
              </Link>
            </label>
            
          </div>
          <ButtonConnexion />
          <hr/>   
          <label>  
            dont have an account ?  
              <Link to="/create">
              Create Account
              </Link>
            </label>
          
        </form>
        </div>

        <div className="FormImag">
          <div className='Img-conx'> 
            <img src={ImgConx} alt="ImgConx" />
          </div>
        </div>

      </div>
    )
  
}

export default Home;