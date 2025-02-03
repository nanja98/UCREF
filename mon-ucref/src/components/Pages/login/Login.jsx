import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../../assets/images/LogoMEDD.png";
import ImgConx from "../../../assets/images/ImgLogin1.png";
import { useNavigate, Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


const FormContainer = styled.div`
  background-color: #2e96af;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 700px; 
  transition: all 0.3s ease-in-out;
`;

const FormWrapper = styled.div`
  background: linear-gradient(to right, #ffffff, #4aa0b0);
  border: 2px solid #3c6881;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(22, 52, 92, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 60vw;  
  min-height: 70vh;
  max-width: 900px; 
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  padding: 13px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const StyledLogo = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Heading = styled.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #fcfcfc;
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 20px;
`;

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  label {
    font-size: 14px;
    color: #333;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #007bff;
    transition: color 0.3s;
  }
`;

const Button = styled.button`
  width: 50%;
  padding: 10px 15px;
  background-color: #941a35;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #700e26;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ImageSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 20px;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;
function Login() {

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <FormContainer>
        <FormWrapper>
          <FormSection>
            <LogoContainer>
              <StyledLogo src={Logo} alt="logo" />
            </LogoContainer>
            <Heading>Welcome to UCREF <br /> Project DataBase!</Heading>
            <p>Enter to get access to data & information.</p>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <InputWrapper>
                  <Icon>
                    <FaUserAlt />
                  </Icon>
                  <StyledInput
                    type="text"
                    placeholder="User name"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>
              <FormGroup>
                <InputWrapper>
                  <Icon>
                    <RiLockPasswordFill />
                  </Icon>
                  <StyledInput
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>
              <RememberForgot>
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="/forgot-password">Forgot Password</Link>
              </RememberForgot>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Button type="submit">Connect</Button>
            </form>
          </FormSection>
          <ImageSection>
            <img src={ImgConx} alt="Login illustration" />
          </ImageSection>
        </FormWrapper>
    </FormContainer>
  );
}

export default Login;
