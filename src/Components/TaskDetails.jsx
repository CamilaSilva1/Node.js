/*Desenvolvido por Camila Silva em 21/03/2022*/
/*Page to show task details*/

// libraries
import React from 'react'

import Button from './Button'
import styles from '../css/TaskDetails.module.css'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


const TaskDetails = () => {

    const params = useParams();

    const navigate = useNavigate();

    //handle when the user click the back button
    const handleBackButton = () => {

            navigate(-1);
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

                <p> Detalhes da tarefa selecionada </p>

            </div>
        </>

    )
}

export default TaskDetails