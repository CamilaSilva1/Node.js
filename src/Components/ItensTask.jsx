/*Desenvolvido por Camila Silva em 15/03/2022*/
/*creating component of the items of each task and showing them*/

//libraries
import React from 'react';

//imports
import styles from '../css/Task.module.css'

const Itens = ({itens}) => {

        return(
           
               <div className={styles.task_container}>
                       {itens.title}
               </div>
        )
}

export default Itens