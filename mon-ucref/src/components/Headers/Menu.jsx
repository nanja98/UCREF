import React from 'react';
import Logo from '../../../src/assets/images/LogoMEDD.png';
//import { useNavigate } from "react-router-dom";
import './Menu.css'
import { AiOutlineCaretRight } from "react-icons/ai";
import { TbHome } from "react-icons/tb";
import { MdEvent } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { RiFileList3Line } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";


const Menu = () => {
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
        <div className='menu'>
            <ul className='menu-links'>  
               <li className='nav-link'>
                <a href='/'>
                  <TbHome className='icone' />
                  <span className='text nav-text'>Dashbord</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                  <MdEvent className='icone'/>
                  <span className='text nav-text'>Events</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                <GoPeople className='icone' />
                  <span className='text nav-text'>People</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                <RiFileList3Line  className='icone'/>
                  <span className='text nav-text'>Seat agreements</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                <LiaChalkboardTeacherSolid  className='icone' />
                  <span className='text nav-text'>Training theme</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                <TbReportSearch className='icone' />
                  <span className='text nav-text'>Search results</span>
                </a>
              </li>
            </ul >
        </div>
         <hr className='tiré'/>
        <div className='bottom-content'>
        <span className='texte navbas-text'>Other</span>
            <ul className='menu-links'>  
               <li className='nav-link'>
                <a href='/'>
                  <BiLogOut className='icone' />
                  <span className='text nav-text'>SCVR </span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                  <MdEvent className='icone'/>
                  <span className='text nav-text'>SEF</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='/'>
                <GoPeople className='icone' />
                  <span className='text nav-text'>Sécrétariat</span>
                </a>
              </li>
               <li className='nav-link'>
                <a href='/'>
                <GoPeople className='icone' />
                  <span className='text nav-text'>Stagiaire</span>
                </a>
              </li>
                <li className='nav-link'>
                <a href='/'>
                  <BiLogOut className='icone' />
                  <span className='text nav-text'>Logout</span>
                </a>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
