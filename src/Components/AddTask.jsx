/*Desenvolvido por Camila Silva em 15/03/2022*/
/*adding a new button */

//libraries
import React from 'react';
import {useState} from 'react'

// imports
import styles from '../css/AddTask.module.css'
import Button from './Button';

const AddTask = ({handleTaskAdd}) => {

    // adding task with state
    const [InputTask, setInputTask] = useState('');

    //getting the value inside the input
    const handleInputChange = (e) => {
            
            setInputTask(e.target.value);
    };

    const handleAddTaskClick = () => {

            handleTaskAdd(InputTask)
            setInputTask("");
    }

    return(

        <div className={styles.add_task_container}>

            {/* renderizing a input for insert a task */}
            <input 
                className={styles.add_task_input}
                type="text"  
                onChange={handleInputChange}
                value={InputTask} 
                />

            {/* calling add button */}
            <div className={styles.add_task_button_container}>

                <Button onClick={handleAddTaskClick}> Adicionar </Button>

            </div>

        </div>
    )
}

export default AddTask