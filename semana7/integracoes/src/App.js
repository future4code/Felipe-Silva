import React from 'react'
import Register from './components/Register'
import List from './components/List'
import axios from 'axios'

class App extends React.Component {

  state = {
    users: [],
    inputName: '',
    inputEmail: '',
    showList: false
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
      headers: {
        Authorization: "Felipe-Silva-paiva"
      }
    })
    .then(res => {
      this.setState({users:res.data})
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
    {
      headers: {
        Authorization: "Felipe-Silva-paiva"
      }
    })
    .then(res => {
      this.setState({inputName: '', inputEmail: ''})
      this.getAllUsers()
      alert("Cadastro realizado com sucesso!")
    })
    .catch(err => {
      console.log(err)
    })
  }

  inputName = evt => {
    this.setState({inputName: evt.target.value})
  }

  inputEmail = evt => {
    this.setState({inputEmail: evt.target.value})
  }

  saveUser = () => {
    if (this.state.inputName !== '' && this.state.inputEmail !== '') {
      this.createUser()      
    } else {
      alert("Por favor, preencha corretamente seu nome e email")
    }
  }
  
  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
      headers: {Authorization: "Felipe-Silva-paiva"}
    })
    .then(res => {
      alert(`O usuário ${id} foi removido.`)
    })
    .catch(err => {
      console.log(err)
      this.getAllUsers()
    })
  }

  backScreen = () => {
    this.setState({showList: !this.state.showList})
  }

  render() {
    return (

    <div>
      {this.state.showList? 
      <List deleteUser={this.deleteUser}users={this.state.users}/>
      :
      <Register
      inputName={this.inputName}
      inputEmail={this.inputEmail}
      valueName={this.state.inputName}
      valueEmail={this.state.inputEmail}
      saveUser={this.saveUser}/>}
      <button onClick={this.backScreen}>Voltar</button>
    </div>

    )}
}

export default App;