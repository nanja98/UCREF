import React from 'react';
import Logo from '../../../assets/images/LogoMEDD.png';
//import { useNavigate } from "react-router-dom";
import './Home.css'
import { AiOutlineCaretRight } from "react-icons/ai";
import { TbHome } from "react-icons/tb";


const Home = () => {
 /*const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };*/

  return (
    <div>
      <nav className='sidebar'>
        <header>
          <div className='image-text'>
            <div className='image'>
              <img src={Logo} alt="logo" />
            </div>
            <div className='text-name'>
              <div className='name'> UP-DB</div>
              <div className='names'> UCREF PROJECT DATABASE</div>
            </div>
          </div>
          <AiOutlineCaretRight className='line-right' />
        </header>
        <div className='menu-bar'> 
          <div className='menu'>
            <ul className='menu-links'>
              <li className='nav-link'>
                <a href='/'>
                  <TbHome />
                  <span className='nav-text'>Dashbord</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                  <TbHome />
                  <span className='nav-text'>Dashbord</span>
                </a>
              </li>
            </ul >
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
