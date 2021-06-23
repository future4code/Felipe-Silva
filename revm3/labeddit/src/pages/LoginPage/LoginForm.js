import React from "react";

import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

import { InputsContainer } from "./styled";
import { TextField, Button, Box, CircularProgress } from "@material-ui/core";
import {login} from '../../services/user'


const LoginForm = ({ setRightButtonText}) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, history, setRightButtonText)
  };

  
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"e-mail"}
          variant={"outlined"}
          margin={"dense"}
          type={"email"}
          required
          fullWidth
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"senha"}
          variant={"outlined"}
          margin={"dense"}
          type={"password"}
          required
          fullWidth
        />
        <Box mt={1}>
          <Button
            type={"submit"}
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
            fullWidth
          >
            Entrar
          </Button>
        </Box>
      </form>
    </InputsContainer>
  );
};
export default LoginForm;
