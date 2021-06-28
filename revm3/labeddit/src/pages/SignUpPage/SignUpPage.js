import React from "react";
import { LogoImage, ScreenContainer, Title, LogoContainer } from "./styled";
import cadastro from "../../assets/cadastro.jpg";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({ setRightButtonText}) => {
 useUnprotectedPage();

  return (
    <ScreenContainer>
      <LogoContainer>
        <LogoImage src={cadastro} />
        <Title>Novo Usuário</Title>
      </LogoContainer>
      <SignUpForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};

export default SignUpPage;