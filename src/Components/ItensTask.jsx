/*Desenvolvido por Camila Silva em 15/03/2022*/
/*creating component of the items of each task and showing them*/

//libraries
import React from 'react';

//imports
import styles from '../css/Task.module.css'

const Itens = ({itens, handleCompletedTaskClick}) => {

        return(
           
               <div className={styles.task_container} 
                    style={itens.completed ? { borderLeft:'6px solid black'} : {}}>
                       
                        <div className={styles.task_title} 
                             onClick={() => handleCompletedTaskClick(itens.id)}>

                                {itens.title}

                        </div>

               </div>
        )
}

export default Itens