import React from "react";
import styled from "styled-components";

const Final = styled.div `
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
export class Final extends React.Component {
    render() {
        return (
            <Final>
                <h3>FIM DO FORMULÁRIO</h3>
                <h6>Obrigado! Agradecemos o envio dos dados. Faremos contato em breve!</h6>
            </Final>
        )
    }
}