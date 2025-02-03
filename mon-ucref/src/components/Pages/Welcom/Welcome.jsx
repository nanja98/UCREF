import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../../../assets/images/LogoMEDD.png';
import ButtonStart from '../../Button/ButtonStart';
import DesciImage from '../../../assets/images/DescriBasLogo.png';
import ImgWelc from '../../../assets/images/ImgWelcome2.png';

// Animation du dégradé
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AppContainer = styled.div`
  background: linear-gradient(-45deg, rgb(211, 211, 211), #2e96af, #0f4c75);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ImagCentre = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

// Animation d'apparition
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Responsive
const ResponsiveContainer = styled(AppContainer)`
  @media (max-width: 768px) {
    background: #2e96af;
  }
`;
// Style pour les images responsives
const StyledImage = styled(motion.img)`
  height: auto;
  margin: 10px 0;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
  }
`;

function Welcome() {
  return (
    <ResponsiveContainer>
      <DashboardContainer>
        <ImagCentre initial="hidden" animate="visible" variants={fadeIn}>
          <img src={Logo} alt="logo" />
          <img src={DesciImage} alt="description" />
          <StyledImage src={ImgWelc} alt="Image_Welcome" whileHover={{ scale: 1.05 }} />
            <ButtonStart />
        </ImagCentre>
      </DashboardContainer>
    </ResponsiveContainer>
  );
}

export default Welcome;
