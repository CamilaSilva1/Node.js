/*Desenvolvido por Camila Silva em 21/03/2022*/
/*Page to show task details*/

// libraries
import React, {useState} from 'react'

import Button from './Button'
import styles from '../css/TaskDetails.module.css'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import AddTask from './AddTask.jsx'


const TaskDetails = () => {

    const params = useParams();

    const navigate = useNavigate();

    const [inputDetails, setInputDetails] = useState("");

    //handle when the user click the back button
    const handleBackButton = () => {

            navigate(-1);
    }

    // insert the details
    const handleInputDetails = (e) => {
        
    }

    // inserting the datails to the json
    const handleAddDetailsClick = () => {

    }

    return(

        <>
            {/* button to back the main page */}
            <div className={styles.back_button_container}>

                <Button onClick={handleBackButton}> Voltar </Button>

            </div>

            {/* main text of the page */}
            <div className={styles.task_details_container}>

               <h2> {params.taskTitle} </h2>
                
               <p> Insira os detalhes da tarefa: </p>  

               <AddTask />

               <p> Detalhes da tarefa: </p>

            </div>
        </>

    )
}

export default TaskDetails