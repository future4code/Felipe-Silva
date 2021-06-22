import React from "react";

import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../../routes/coordinator";
import { InputsContainer } from "./styled";
import { TextField, Button, Box, CircularProgress } from "@material-ui/core";

const LoginForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <InputsContainer>
      <form OnSubmit={onSubmitForm}>
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
            onClick={() => goToFeed(history)}
          >
            Entrar
          </Button>
        </Box>
      </form>
    </InputsContainer>
  );
};
export default LoginForm;
