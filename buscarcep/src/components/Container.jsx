// Criado por Camila Silva
// Desde 13/09/2022
// Este script contem todo o conteudo visual da pagina

import React, {Component} from 'react';
import styles from '../modules/Container.module.css'; 
import CheckCep from '../components/CheckCep';

class Container extends Component{
    render(){
        return(
            <div id={styles.container}>

                <h1 className={styles.title}>Buscar Cep</h1>

                <CheckCep />

                <main className={styles.mainContent}>
                        
                        <h2> CEP: {CheckCep.cep.cep} </h2>
                        
                        <span>Rua: {CheckCep.cep.logradouro} </span>
                        <span> Complemento: {CheckCep.cep.complemento} </span>
                        <span> Bairro: {CheckCep.cep.bairro}</span>
                        <span> {CheckCep.cep.localidade} - {CheckCep.cep.uf} </span>

                </main>
        </div>
    
        )
    }
        
}

export default Container;