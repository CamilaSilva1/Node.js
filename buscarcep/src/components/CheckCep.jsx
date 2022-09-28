// Criado por Camila Silva
// Desde 13/09/2022
// Este script é responsavel por checar o cep digitado pelo usuário

import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import styles from '../modules/Container.module.css'; 
import api from '../services/api';

function CheckCep(){

    const [input, setInput] = useState('');
    const [cep, setCep] = useState('');

    async function handleSearch(){

        if(input === ''){
            alert('É preciso digitar o CEP!');
            return;
        }

        try{

            const response = await api.get(`${input}/json`);
            console.log(response.data);

            setCep(response.data);
            setInput('');

        }catch{

            alert('Erro ao buscar CEP');
            setInput('');

        }
    }

    return(
        <div className={styles.containerInput}>
            
            <input type="text" 
                   placeholder='Digite o Cep'
                   value={input}
                   onChange={ (event) => setInput(event.target.value)} />

            <button className={styles.btnSearch} onClick={handleSearch}> <FiSearch/> </button>

        </div>
    )
}

export default CheckCep;