/*Desenvolvido por Camila Silva em 15/03/2022*/
/* Main page */

//Libraries
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import styles from './css/App.module.css'
import TasksRender from './Components/TasksRender'
import AddTask from './Components/AddTask'

const App = () => {

  //state of the tasks with array
  const [taskList, setTasksList] = useState([{

            id: '1',
            title: 'Study',
            completed: false,
      },
      {
            id: '2',
            title: 'Work',
            completed: false,
      }

  ])

//   function for handle task addition
    const handleTaskAdd = (taskTitle) => {

            // a newTask variable was created that will get all that is in task
            const newTask = [...taskList, {

                title: taskTitle,
                id: uuidv4(),
                completed: false,

            }]

            //modifying the tasks
            setTasksList(newTask)
    }

  return(

        <>

            <div className={styles.container}>

                <AddTask handleTaskAdd={handleTaskAdd}/>

                <TasksRender taskItem={taskList} />

            </div>        

        </>

  )

} 

export default App