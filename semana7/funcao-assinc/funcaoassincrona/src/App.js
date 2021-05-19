import React from 'react';
import Register from './Components/Register';
import List from './Components/List';
import axios from 'axios';
import styled from 'styled-components';

export default class App extends React.Component {

  state = {
    actualScreen: 'registro'
  }
  chooseScreen = () => {
    switch (this.state.actualScreen) {
      case 'registro':
        return <Register goToList={this.goToList} />
      case 'lista':
        return <List goToRegister={this.goToRegister}/>
      default: 
        return <div>Página não encontrada!</div>
    }
  }
  goToRegister = () => {
    this.setState({actualScreen: 'registro'})

  }
  goToList = () => {
    this.setState({actualScreen: 'lista'})

  }

  render() {
    return (

    <div>
      {this.chooseScreen()}
    </div>
    )}
}

