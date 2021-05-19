import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

export default class Register extends React.Component{

    state = {
        name: '',
        email: ''
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }

    newRegister = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.name,
            email:this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'Felipe-Silva-paiva'
            }
        })
        .then((res) => {
            alert('Cadastro efetivado.')
            this.setState({name:'', email: ''})


        })
        .catch((err)=>{
            alert(err.response.data.message)

        })

    }




    render(){
        return(
            <div>
                <button onClick={this.props.goToList}>Lista de usuários</button>
                <h2>Registro</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.name}
                onChange={this.handleName}
                />
                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button onClick={this.newRegister}>Registrar</button>
            </div>
        )
    }
}
