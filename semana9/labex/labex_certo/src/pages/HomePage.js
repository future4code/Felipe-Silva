import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const HomePage = () => {
    const history = useHistory ();
    
    const goToListTripsPage = () => {
        history.push('/trips/list');
    }

    const goToAdminPage = () => {
        history.push('/admin/trips/list');
    }

    return (
      <div>
        <h3>Labex - Torne-se um viajante interestelar!</h3>
        <button onClick={goToListTripsPage}>Escolha sua próxima viagem</button>
        <button onClick={goToAdminPage}>Gerenciar viagens</button>
      </div>
    );
  }
  
  export default HomePage;