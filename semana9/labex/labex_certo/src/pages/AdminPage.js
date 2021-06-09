import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
    return (
        <div class = "viagens_marcadas">
            <button id = "voltar">Voltar</button>
            <button id = "logout">Sair</button>
            <h5>Viagens marcadas:</h5>
            <ul>
                <li></li>
                <button>Cancelar</button>
                <li></li>
                <button>Cancelar</button>
                <li></li>
                <button>Cancelar</button>
            </ul>
        </div>

    );
  }
  
  export default AdminPage;