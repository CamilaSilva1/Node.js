// Criado por Camila Silva
// Desde 25/08/2022
// Este script é responsavel em renderizar os componentes

import {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import style from './styles/style.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){

      if(input === ''){
        alert("É preciso digitar o cep!");
        return;
      }

      try{

        const response = await api.get(`${input}/json`);
        console.log(response.data);
        setCep(response.data);
        setInput("");
        
      }catch{

        alert("Erro ao buscar CEP");
        setInput("");

      }
  }

  return (
    <div id="container">

        <h1 className="title">Buscar Cep</h1>

        <div className="container-input">

            <input type="text" 
                   placeholder="Digite o cep"
                   value={input}
                   onChange={ (event) => setInput(event.target.value) }/>
                
            <button className="btn-search" onClick={handleSearch}> <FiSearch/> </button>

        </div>

       
        {Object.keys(cep).length > 0 && (

              <main className="main-content">
              
                <h2> CEP: {cep.cep} </h2>
                
                <span>Rua: {cep.logradouro} </span>
                <span> Complemento: {cep.complemento} </span>
                <span> Bairro: {cep.bairro} </span>
                <span> {cep.localidade} - {cep.uf} </span>

              </main>

        )}
           
    </div>
  );
}

export default App;


