import React, {useState} from "react";
import { AppBar, Button } from "@material-ui/core";
import { StyledToolbar, StyledTypography, StyledBox, ImgLogo } from "../styled";
import { goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.gif";


const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem('token')
  const history = useHistory();
  
 
  const logout = () => {
    localStorage.removeItem("token");
  }

    const rightButtonAction = () => {
        if (token){
            logout()
            setRightButtonText('Login')
            goToLogin(history)
        } else {
            goToLogin(history)
        }
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
        <Button variant='outlined' size='small' onClick={rightButtonAction} color="secondary">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;
