// Created By Camila Silva
// Since 13/06/2022
// Using ApexCharts.js with React.js
// This script is responsable for render the components of the chart created 
// Main script

// imports
import React from 'react';

// importing modules and components
import BarChart from './components/BarChart.jsx';
import ScatterChart from './components/ScatterChart.jsx';
import Header from './components/Header.jsx';
import styles from './modules/Container.module.css'

// renderizing the components on the main page
class App extends React.Component{
      render(){
          return (
            <div className={styles.body}>
                {/* header component */}
                <Header />  
            
                <div className={styles.container}>
        
                  {/* bar chart component */}
                  <BarChart />
        
                  {/* scatter chart component */}
                  <ScatterChart />
                  
                </div>
             
          </div>
          );
      }
}

export default App;
