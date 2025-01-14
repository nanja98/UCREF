import React , { useState }from 'react';
import Logo from '../../../assets/images/LogoMEDD.png';
import ImgConx from'../../../assets/images/ImgLogin1.png'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


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
      username: "test",
      password: "1234",
    };

    if (
      formData.username === fakeUser.username &&
      formData.password === fakeUser.password
    ) {
      navigate("/home");
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
          <div className='Form-wrapper'>
            <div className="form-group">
            <div className="input-wrapper">
              <FaUserAlt className='icone'/>
              <input
                type="text"
                placeholder='User name'
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className="form-group">
            <div className="input-wrapper">
            <RiLockPasswordFill className='icone'/>
              <input
                type="password"
                placeholder='Password'
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              </div>
            </div>
            <div className='remember-forgot'>
              <label><input type="checkbox"/>Remeber me</label>
              <Link>Forgot Password</Link>
            </div>
            {error && <p className='error'>{error}</p>}
            <button className='ButtonLogin' type="submit">Connect</button>
            
            <div className='Accnt'>
              <p>Don't have an account ? <Link className='Register'>Register</Link></p>
            </div>
            </div>
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