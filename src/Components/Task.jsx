/*Desenvolvido por Camila Silva em 15/03/2022*/
/*creating component of the items of each task and showing them*/

//libraries
import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

//imports
import styles from '../css/Task.module.css'


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {

        const navigate = useNavigate(); 

        // handle when the user click in some task
        const handleTaskDetailsClick = () => {

                navigate(`/${task.title}`);
        }

        return(
           
               <div className={styles.task_container} 
        //        if the user clicked on task, change their completed and add a border
                    style={task.completed ? { borderLeft:"6px solid black"} : {}}>
                       
                        <div className={styles.task_title} 
                             onClick={() => handleTaskClick(task.id)}>

                                {task.title}

                        </div>

                        <div className={styles.buttons_container}>
                                {/* button to remove task */}
                                <button className={styles.remove_task_button}
                                        onClick={() => handleTaskDeletion(task.id)}>
                                        
                                        <CgClose />

                                </button>

                                {/* button to see task details */}
                                <button className={styles.see_task_details_buttons}
                                                onClick={handleTaskDetailsClick} > 
                                        
                                        
                                        <CgInfo />
                                        
                                </button>

                        </div>

               </div>
        )
}

export default Task