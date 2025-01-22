import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/images/LogoMEDD.png';
import ButtonStart from '../../Button/ButtonStart';
import backgroundImage from '../../../assets/images/backGround.png';

const AppContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MenuHorizontal = styled.nav`
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuRight = styled.div`
  ul {
    list-style: none;
    display: flex;
    

    li {
      margin: 0 15px;

      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease, transform 0.3s ease;

        &:hover {
          color: #2e96af;
          transform: scale(1.1);
        }
      }
    }
  }
`;

const TextMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 9%;
  height: 100vh;
  margin-left: 10%;

  .text-titre {
    font-size: 6rem;
    font-weight: bold;
    color: #2e96af;
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .text {
    font-size: 1.8rem;
    color: #000000;
  }
`;

const StyledButtonStart = styled(ButtonStart)`
  display: flex;
`;

// Responsive
const ResponsiveContainer = styled(AppContainer)`
  @media (max-width: 768px) {
    background: white;

    ${MenuHorizontal} {
      flex-direction: column;
      align-items: center;
    }

    ${MenuRight} ul {
      flex-direction: column;
      width: 100%;
    }

    ${TextMenu} {
      align-items: center;
      margin: 5% auto;
      margin-left: 5%;
      justify-content: center;

      .text-titre {
        font-size: 3rem;
      }

      .text {
        font-size: 1.2rem;
      }
    }

    ${StyledButtonStart} {
      justify-content: center;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    ${MenuHorizontal} {
      padding: 15px 30px;
    }

    ${MenuRight} ul {
      flex-direction: row;
      justify-content: center;
    }

    ${TextMenu} {
      margin-left: 7%;

      .text-titre {
        font-size: 5rem;
      }

      .text {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1025px) {
    ${MenuHorizontal} {
      padding: 20px 50px;
    }

    ${MenuRight} li {
      margin: 0 20px;
    }
  }
`;

function Welcome() {
  return (
    <ResponsiveContainer>
      <DashboardContainer>
        <MenuHorizontal>
          <MenuLeft>
            <img src={Logo} alt="logo" />
          </MenuLeft>
          <MenuRight>
            <ul>
              <li><a href="#about">Contact</a></li>
            </ul>
          </MenuRight>
        </MenuHorizontal>
        <TextMenu>
          <span className="text-titre">UP-DB</span>
          <span className="text">UCREF Project Database</span>
          <StyledButtonStart />
        </TextMenu>
      </DashboardContainer>
    </ResponsiveContainer>
  );
}

export default Welcome;
