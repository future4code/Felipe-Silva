import { useState, useEffect } from 'react';
import axios from 'axios';
import useInput from "../hooks/useInput";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const[email, handleEmail] = useInput('');
    const[password, handlePassword] = useInput('');
    const history = useHistory();

    useEffect(() => {
        document.title = 'LabeX';
    });

    const buttonLogin = () => {
        const body = {email, password};
        console.log(body);

        axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
          console.log(res)
          localStorage.setItem("token", res.data.token);
          history.push("/admin/trips/list");
        })
        .catch((err) => alert(err.response.data.message));
    };


    return (
      <div>
          Login Page
          <input value={email} onChange={handleEmail} placeholder="e-mail" />
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password" />
          <button onClick={buttonLogin}>Entrar</button>
      </div>
    );
  }
  
export default LoginPage;
  