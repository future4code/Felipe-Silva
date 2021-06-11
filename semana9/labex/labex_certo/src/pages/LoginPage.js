import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { goToHomePage } from '../../routes/Coordinator';
import baseURL from '../../constants/baseURL';

function LoginPage() {
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  });


  const onClickLogin = (event) => {
    event.preventDefault();
    const url = `${baseURL}/login`;

    const body = form;
    
    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push("/admin/trips/list");
        alert("Usuário logado.")
      })
      .catch((err) => {
        alert(`${err.response.data.message}! Tente novamente :)`)
    });

    cleanFields();
  };

  return (
    <div>
      <h2>Página de Login</h2>
      <form onSubmit={onClickLogin}>
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder={"e-mail"}
          required
          type={"email"}
        />
        <input 
          name={"password"}
          value={form.password} 
          onChange={onChange} 
          placeholder={"senha"}
          required
          type={"password"}  
        />
        <button>Login</button>
      </form>
      <div>
        <button onClick={() => { goToHomePage(history) }}>Voltar</button>
      </div>
    </div>
  );
}

export default LoginPage;
