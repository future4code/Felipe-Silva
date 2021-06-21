import React from "react";
import Button from "@material-ui/core/Button";
import {
    LogoImage,
    ScreenContainer,
    Title,
    LogoContainer,
    SignUpButtonContainer,
  } from "./styled";

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Button variant="contained" color="secondary">
        Cadastre-se
      </Button>
      
    </div>
  );
};
export default LoginPage;
