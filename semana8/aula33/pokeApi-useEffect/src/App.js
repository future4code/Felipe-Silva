import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const pokeUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  // método que roda após a montagem do componente
  // função axios que está batendo na API e buscando 151 pokemons
  // função que está setando no estado os 151 pokemons
  useEffect(() => {
    const getPoke = () => {
      axios
        .get(pokeUrl)
        .then((res) => setPokelist(res.data.results))
        .catch((err) => console.log(err));
    };
    getPoke();
  }, [setPokeList, pokeUrl]);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
};

export default App;
