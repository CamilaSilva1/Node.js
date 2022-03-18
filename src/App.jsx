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
      },
      {
            id: '3',
            title: 'Break',
            completed: false,
      }

  ])

  // function to change Completed in the taskList
    const handleCompletedTaskClick = (taskId) => {

        // accessing the task list
          const newTasks = taskList.map(taskItem => {

            // if the current id is the same as the previous id
            // return all in the list and change completed to false or true
                  if(taskItem.id === taskId)
                      return {

                        ...taskList,
                        completed: !taskItem.completed

                      }

                      // else return the itens in the list
                      return taskItem
                          
          })

          setTasksList(newTasks)
    }

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

                <AddTask handleTaskAdd={handleTaskAdd} />

                <TasksRender taskItem={taskList} handleCompletedTaskClick={handleCompletedTaskClick} />

            </div>        

        </>

  )

} 

export default App