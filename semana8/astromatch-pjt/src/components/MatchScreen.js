import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export function MatchScreen() {
  const [match, setMatch] = useState([]);

  const getMatch = async () => {
    try {
      const ans = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Felipe-Silva/matches"
      );
      setMatch(ans.data.match);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMatch();
  }, []);

  return (
    <div>
      <img src={match.photo} alt="Foto do match" />
      <p>{match.name}</p>
    </div>
  );
}
