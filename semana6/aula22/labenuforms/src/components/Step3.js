import React from 'react';
import styled from 'styled-components';

const Step3 = styled.div `
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
export class Step3 extends React.Component {
    render() {
        return (
            <Step3>
                <h3>INFORMAÇÕES DE ESCOLARIDADE</h3>
                <h6>5. Destaque os motivos que a(o) impediram de se graduar:</h6>
                <input type="text"></input>
                <h6>6. Fez algum curso complementar?</h6>
                <select>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                    <option>Não fiz curso complementar</option>
                    </select>
            </Step3>
        )
    }
}
