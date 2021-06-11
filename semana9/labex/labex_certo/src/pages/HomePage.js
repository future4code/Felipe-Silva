import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminHome, goToListTripsPage } from '../../routes/Coordinator';

function HomePage() {
  const history = useHistory();

  return (
    <div>
      <h1>LabeX - Torne-se um viajante interestelar!</h1>
      <div>
        <button onClick={() => {goToListTripsPage(history)}}>Lista de viagens</button>
        <button onClick={() => {goToAdminHome(history)}}>Gerenciar viagens</button>
      </div>
    </div>
  );
};

export default HomePage;
