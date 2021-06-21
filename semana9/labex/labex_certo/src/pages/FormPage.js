import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useGetAllTrips from '../../hooks/useGetAllTrips';
import useForm from '../../hooks/useForm';
import allCountries from '../../constants/listOfCountries';

function FormPage() {
  const history = useHistory();
  const getTrips = useGetAllTrips("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Silva-paiva/trips", []);
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age:"",
    applicationText: "",
    profession: "",
    country: ""
  });
  const [tripIdChoosen, setTripIdChoosen] = useState("")

  const goToListTripsPage = () => {
    history.goBack();
  };

  const captureTripIdChoosen = (event) => {
    setTripIdChoosen(event.target.value)
  }
    return (
        <div>
            Application Form
        </div>
    );
}

const submitAppForm = (event) => {
    event.preventDefault();
    if (!tripIdChoosen) {
      alert("Selecione um destino!");
    } else {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Silva-paiva/trips/${tripIdChoosen}/apply`

      const body = form ;

      axios
        .post(url, body)
        .then(() => {
          alert("Dados enviados")
        })
        .catch(() => {
          alert("Erro!")
      });
      cleanFields();
    };
  };

  const renderTripsOption = getTrips && getTrips.map((info) => {
    return (
      <option value={info.id} key={info.id}>{info.name}</option>
    );
  });

  const renderCountriesOption = allCountries.map((country) => {
    return (
      <option value={country} key={country}>{country}</option>
    );
  });

  return (
    <div>
      <div>
        <h2>Preencha os campos abaixo</h2>
        <select onChange={captureTripIdChoosen} >
          <option value="">Selecionar viagem</option>
          {renderTripsOption}
        </select>
        <form onSubmit={submitAppForm}>
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
            pattern={"^.{3,}"}
            title={"Preencha com pelo menos três (3) letras"}
          />
          <input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder={"Idade"}
            required
            type={"number"}
            min={18}
          />
          <input
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder={"Explique por que deve ser selecionado"}
            required
            minLength={30}
          />
          <input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder={"Profissão"}
            required
            minLength={10}
          />
          <select
            name={"country"}
            value={form.country}
            onChange={onChange}
          >
            <option value="default">País</option>
            {renderCountriesOption}
          </select>
          <button>Enviar</button>
        </form>
      </div>
      <div>
        <button onClick={goToListTripsPage}>Voltar</button>
      </div>
    </div>
  );

export default FormPage;