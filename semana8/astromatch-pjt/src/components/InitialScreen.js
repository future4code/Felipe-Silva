import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export function InitScreen() {
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const ans = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Felipe-Silva/person"
      );
      setProfile(ans.data.profile);
    } catch (err) {
      console.log(err);
    }
  };

  const choosePerson = async (pId, pChoice) => {
    const body = {
      id: pId,
      choice: pChoice
    };
    try {
      await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Felipe-Silva/choose-person",
        body
      );
      getProfile();
    } catch (err) {
      console.log(err);
    }
  };

  const clearMatch = async () => {
    try {
      await axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Felipe-Silva/clear"
      );
      getProfile();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <img src={profile.photo} alt="Foto do perfil" />
      <h5>{profile.name}</h5>
      <p>{profile.bio}</p>
      <button onClick={() => choosePerson(profile.id, true)}>
        Hella Like!
      </button>
      <button onClick={() => choosePerson(profile.id, false)}>
        Ugly, thanks.
      </button>
      <button onClick={clearMatch}>Clear all matches</button>
    </div>
  );
}
