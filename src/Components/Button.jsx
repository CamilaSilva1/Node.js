/*Desenvolvido por Camila Silva em 15/03/2022*/
/*creating component of the button for add and back*/

// libraries
import React from 'react';

// imports
import styles from '../css/Button.module.css'

// getting a child for the button and an onClick function
const Button = ({children, onClick}) => {
    return(

            <button className={styles.add_task_button} onClick={onClick}>

                {children}

            </button>
    )
}

export default Button