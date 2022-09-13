// Criado por Camila Silva
// Desde 25/08/2022
// Este script é responsavel em renderizar os componentes

import React from 'react';

import Container from './components/Container';

import styles from './modules/Container.module.css'; 

class App extends React.Component{

  render(){
    return (
      <div id={styles.container}>
  
          <Container />

      </div>
    );
  }
}

export default App;


