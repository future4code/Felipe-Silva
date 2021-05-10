import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Step1} from './components/Step1';
import {Step2} from './components/Step2';
import {Step3} from './components/Step3';
import {Final} from './components/Final';

export default class App extends React.Component {
  state = {
    etapa:1,
  }

  proximaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        this.setState({etapa:2})
        break;
      case 2:
        this.setState({etapa:3})
        break;
        case 3:
          this.setState({etapa:4})
          break;
        default:
          <h6>Servidor Indisponível!</h6>
          break;
    }
  }

  render () {
    const renderizaEtapa = () => {
      switch (this.state.etapa){
        case 1: 
          return <Step1/>;
        case 2: 
          return <Step2/>;
        case 3: 
          return <Step3/>;
        case 4:
          return <Final/>;
      }
    }
    return (
    <div className='App'>
      {renderizaEtapa()}
      {this.state.etapa !== 4 && <button onClick={this.proximaEtapa}>Próxima etapa</button>}
    </div>
  )
  };
}
