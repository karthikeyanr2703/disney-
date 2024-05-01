import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Login = (props) => {
  return (
    <Container>
     <NavbarContainer>
             <img src="../../public/images/logo.svg" alt="" />
             <button>Login</button>
     </NavbarContainer>
      <Content>
        <StyledImage src="../../public/images/cta-logo-one.svg" />
        <StyledButton>Get All There</StyledButton>
        <LoginPara>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </LoginPara>
        <StyledBottomImg src="../../public/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-image: url("../../public/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 70px;
  overflow-x:hidden ;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
     img{
      width: 8vw;
     }
     button{
      outline: none;
      border: none;
      padding: 10px 20px;
      border-radius: 7px;
      background-color: transparent;
      border: 1.5px solid white;
      color: white;
      font-size: 20px;
      font-weight: 500;
     }


  `
const Content = styled.div`
  width: 80vw;
  height: 76%;
 /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const StyledImage = styled.img`
  width: 70%;
`;
const StyledButton = styled.button`
  outline: none;
  border: none;
  width: 70%;
  padding: 20px 30px;
  border-radius: 7px;
  background-color: #065de2;
  text-transform: uppercase;
  color: white;
  font-size: 20px;
  word-spacing: 5px;
  font-weight: 600;

  &:hover{
    background-color: #0483ee;
  }
`;
const LoginPara = styled.p`
width: 70%;
text-align: center;
font-size: 17px;
line-height: 21px;
letter-spacing: 1.5px;
`;

const StyledBottomImg = styled.img`
  width: 50vw;
`;
export default Login;
