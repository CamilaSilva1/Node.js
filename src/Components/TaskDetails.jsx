/*Desenvolvido por Camila Silva em 21/03/2022*/
/*Page to show task details*/

// libraries
import React from 'react'

import Button from './Button'
import styles from '../css/Task.module.css'

const TaskDetails = () => {

    return(

        <>
            {/* button to back the main page */}
            <div className={styles.back_button_container}>

                <Button> Voltar </Button>

            </div>

            {/* main text  */}
            <div className={styles.task_details_container}>

                <p> Titulo </p>

                <p> detalhes da tarefa selecionada </p>

            </div>
        </>

    )
}

export default TaskDetails