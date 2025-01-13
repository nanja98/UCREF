import React , { useState }from 'react';
import Logo from '../../../assets/images/LogoMEDD.png';
import ImgConx from'../../../assets/images/ImgLogin1.png'
import './Login.css'
import { useNavigate } from 'react-router-dom';


function Login() {
  // Données du formulaire
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  //Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Exemple utilisateur 
    const fakeUser = {
      username: "test@gmail.com",
      password: "1234",
    };

    if (
      formData.username === fakeUser.username &&
      formData.password === fakeUser.password
    ) {
      navigate("/create");
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }
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
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
           
          />
        </div>
        {error && <p className='error'>{error}</p>}
        <button type="submit">Se connecter</button>
        
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
export default Login;