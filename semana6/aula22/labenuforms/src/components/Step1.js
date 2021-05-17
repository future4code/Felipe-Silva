import React from "react";
import styled from "styled-components";

const Passo1 = styled.div `
text-align: center;
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`
export class Step1 extends React.Component {
  render() {
    return (
      <Passo1>
        <h3>DADOS GERAIS</h3>
        <h6>1. Qual o seu nome?</h6>
        <input type="text"></input>
        <h6>2. Qual a sua idade?</h6>
        <input type="text"></input>
        <h6>3. Digite seu email:</h6>
        <input type="text"></input>
        <h6>4. Escolaridade:</h6>
        <select>
          <option value="A">Ensino Médio Incompleto</option>
          <option value="B">Ensino Médio Completo</option>
          <option value="C">Ensino Superior Incompleto</option>
          <option value="A">Ensino Superior Completo</option>
        </select>
      </Passo1>
    );
  }
}
