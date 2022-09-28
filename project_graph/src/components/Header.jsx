// Created By Camila Silva
// Since 13/06/2022
// Using ApexCharts.js with React.js
// This script is responsable for creating the application header

// imports
import React, {Component} from 'react';

// importing styles
import styles from '../modules/Header.module.css'

// creating and renderizing application header
class Header extends Component{
    render (){
        return(
            <div className='header_container'>
                <div className={styles.barTop}></div>
                {/* // Div with a simple title and paragraph  */}
                <header className={styles.header}>

                    <h1>Dashboard</h1>
                    <p>Desafio Técnico Frontend</p>
                
                </header>
            </div>
        )
    }
}

export default Header;