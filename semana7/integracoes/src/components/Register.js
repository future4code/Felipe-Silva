import React from 'react';

function Register(props) {
    return (
        <div>
            <label>Nome:</label>
            <input onChange={props.inputName} value={props.valueName}></input>
            <label>Email:</label>
            <input onChange={props.inputEmail} value={props.valueEmail} ></input>
            <button onClick={props.saveUser}>Salvar</button>
        </div>
    )
}

export default Register
