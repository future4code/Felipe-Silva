import styles from "styled-components";
import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: ""
  };

  componentDidMount() {
    this.getPokes();
  }

  getPokes = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1510&offset=0"
      );
      this.setState({ pokemons: response.data.results });
    } catch (err) {
      console.log(err);
    }
  };
  pokePics = async (event) => {
    console.log(event.target.value);
    try {
      const url = event.target.value;
      const response = await axios.get(`${url}`);
      this.setState({ picture: response.data.sprites.front_default });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });
    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange={this.pokePics}>
          {pokeList}
          <option>Escolha seu pokemon</option>
        </select>

        {this.state.picture && (
          <img src={this.state.picture} alt="foto do pokemon"></img>
        )}
      </div>
    );
  }
}
