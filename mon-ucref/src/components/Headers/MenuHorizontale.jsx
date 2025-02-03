import React, { useState }  from 'react';
import styled from 'styled-components';
import './MenuHorizontale.css';
import { MdOutlineNotifications } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = styled.nav`
  padding: 10px 20px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;

  a {
    text-decoration: none;
    color: #2e96af;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color:rgb(0, 0, 0);
    }
  }
`;


function HorizontalMenu() {
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (event) => {
    setSearchTerm(event.target.value);
};

  return (
    <Navbar>
      <NavList>
        <NavItem  className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <RiSearch2Line />
        </NavItem>
        <NavItem>
          <MdOutlineNotifications className="notification" />
        </NavItem>
        
      </NavList>
     
    </Navbar>
  );
}

export default HorizontalMenu;