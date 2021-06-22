import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { StyledToolbar, StyledTypography, StyledBox, ImgLogo } from "../styled";
import { goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.gif";


const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledBox
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ImgLogo src={logo} alt="Logo" />
          <StyledTypography
            variant="h6"
            color="inherit"
          >
            Labeddit
          </StyledTypography>
        </StyledBox>
        <Button variant='outlined' size='small' onClick={() => goToLogin(history)} color="secondary">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;
