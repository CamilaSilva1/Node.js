/*Desenvolvido por Camila Silva em 15/03/2022*/
/*rendering tasks and verifying the itens of the list*/

//libraries
import React from 'react'
import ItensTask from './ItensTask'

const TasksRender = ({ taskItem }) => {

        return(
             
                <>
                    {taskItem.map((taskList) => (
                        <ItensTask itens={taskList} />
                    ))}
                </>
        )
}

export default TasksRender