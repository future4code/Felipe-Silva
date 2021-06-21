import React from 'react';
import { useHistory } from 'react-router-dom';
import useGetAllTrips from '../../hooks/useGetAllTrips'

function ListTripsPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.goBack();
  };

  const goToAppFormPage = () => {
    history.push("/trips/application");
  };

  const getTrips = useGetAllTrips("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Silva-paiva/trips", []);
  
  const renderAllTrips = getTrips && getTrips.map((info) => {
    return (
      <div key={info.id}>
        <p>Nome: {info.name}</p>
        <p>Descrição: {info.description}</p>
        <p>Planeta: {info.planet}</p>
        <p>Duração: {info.durationInDays}</p>
        <p>Data: {info.date}</p>
      </div>
    );
  });

  return (
    <div>
      <div>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToAppFormPage}>Inscrever-se</button>
      </div>
      <div>
        <h2>Lista de viagens</h2>
        {renderAllTrips}
      </div>
    </div>
  );
};

export default ListTripsPage;