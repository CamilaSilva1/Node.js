/*Desenvolvido por Camila Silva em 15/03/2022*/
/*rendering tasks and verifying the itens of the list*/

//libraries
import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {

        return(
             
                <>
                    {tasks.map((task) => (
                        <Task 
                                key={task.id}
                                        task={task} 
                                                handleTaskClick={handleTaskClick}
                                                        handleTaskDeletion={handleTaskDeletion} />
                    ))}
                </>
        )
}

export default Tasks