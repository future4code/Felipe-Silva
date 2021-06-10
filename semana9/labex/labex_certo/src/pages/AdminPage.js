import axios from 'axios';
import React from   react;
import {useHistory} from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage';
import useGetAllTrips from '../hooks/useGetAllTrips';


function AdminPage() {
    useProtectedPage();

    const history = useHistory();

    const goToHomePage = () => {
        history.push('/');
    };

    const goToNewTripPage = () => {
        history.push('/admin/trips/create');
    };

    const goToLoginPage = () => {
        history.goBack();
        localStorage.removeItem('token');
    };

    const goToTripDetailsPage = (id) => {
        localStorage.setItem('tripId', id);
        history.push(`/admin/trips/${id}`);
    }

    const deleteTrips = (id) => {
        if (window.confirm('Deseja realmente cancelar a viagem?')) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Silva-paiva/trips/${id}`;

            const header = {
                headers: {
                    auth: localStorage.getItem('token')
                }
            };

            axios.delete (url, header)
            .then (()=> {
                window.location.reload();
            })
            .catch((err)=>{
                console.log(err.response.data)
            });
        };
    };

    const getTrips = useGetAllTrips("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Silva-paiva/trips", []);

    const renderAllSimplifyTrips = getTrips = getTrips && getTrips.map((info)=> {
        return (
            <div key={info.id}>
                <p onClick={()=> {goToTripDetailsPage(info.id)}}>{info.name}</p>
                <button onClick={()=> {deleteTrips(info.id)}}>Apagar</button>
            </div>
        );
    });
    
    return (
        <div class = "viagens_marcadas">
            <button id = "voltar" onClick={goToHomePage}>Voltar</button>
            <button id = "logout" onClick={goToLoginPage}>Sair</button>
            <button onClick={goToNewTripPage}>Criar viagem</button>
            {renderAllSimplifyTrips}
        </div>

    );
  }
  
  export default AdminPage;