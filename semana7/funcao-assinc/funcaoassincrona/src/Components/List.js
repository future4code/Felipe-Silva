import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const CardUser = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width:150px;
justify-content: space-between;
display: flex;
`
export default class List extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        this.getUsers()
    }


    getUsers = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers:{
                Authorization: 'Felipe-Silva-paiva'
            }
        })
        .then((res) => {
            this.setState({ users:res.data})

        })
        .catch((err)=> {
            alert('Solicitação não registrada. Tente novamente.')

        })

    }
    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${id}`
        
        axios.delete(url, {
            headers:{
                Authorization: 'Felipe-Silva-paiva'
            }

        })
        .then((res) =>{
            alert('Usuário apagado com sucesso.')
            this.getUsers()

        })
        .catch((err) =>{
            alert('Erro! Tente novamente em alguns instantes.')
            
        })
    }

    render(){
        const usersList = this.state.users.map((user) =>{
            return ( 
                <CardUser key={user.id}>
                    {user.name}
                    <button onClick={()=> this.deleteUser(user.id)}>X</button>
                </CardUser>
            )
        })
        
        return(
            <div>
                <button onClick={this.props.goToRegister}>Registrar</button>
                <h2>Usuários registrados</h2>
                {usersList}
            </div>
        )
    }
}
