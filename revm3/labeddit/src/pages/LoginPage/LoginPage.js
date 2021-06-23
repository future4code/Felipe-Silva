import React from "react";
import login from "../../assets/login.jpeg";
import { useHistory } from "react-router";
import { goToSign } from "../../routes/coordinator";
import {
  LogoImage,
  ScreenContainer,
  LogoContainer,
  SignUpButtonContainer,
} from "./styled";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory();
  return (
    <ScreenContainer>
      <LogoContainer>
        <LogoImage src={login} />
      </LogoContainer>
      <LoginForm setRightButtonText={setRightButtonText} />
      
        <Button
          type={"submit"}
          variant={"text"}
          color={"primary"}
          onClick={() => goToSign(history)}
        >
          Não possui conta? Cadastre-se!
        </Button>
      
    </ScreenContainer>
  );
};
export default LoginPage;
