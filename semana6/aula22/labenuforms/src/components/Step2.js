import React from 'react';
import styled from 'styled-components';

const Passo2 = styled.div `
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
export class Step2 extends React.Component {
    render() {
        return (
            <Passo2>
                <h3>SE VOCÊ ESTÁ CURSANDO OU JÁ TERMINOU O ENSINO SUPERIOR</h3>
                <h6>5. Qual o curso?</h6>
                <input type="text"></input>
                <h6>6. Qual a unidade de ensino?</h6>
                <input type="text"></input>
            </Passo2>
        )
    }
}
