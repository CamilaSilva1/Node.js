/*Desenvolvido por Camila Silva em 15/03/2022*/
/* Main page */

//Libraries
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import styles from './css/App.module.css'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import Header from './Components/Header'
import TaskDetails from './Components/TaskDetails'

const App = () => {

  //state of the tasks with array
  const [tasks, setTasks] = useState([{

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
    const handleTaskClick = (taskId) => {

        // accessing the task list
          const newTasks = tasks.map( (task) => {

            // if the current id is the same as the previous id
            // return all in the list and change completed to false or true
                  if(task.id === taskId)
                      return {

                        ...task,
                        completed: !task.completed

                      };

                      // else return the itens in the list
                      return task
                          
          });

          setTasks(newTasks);
    };

//   function for handle task addition
    const handleTaskAdd = (taskTitle) => {

            // a newTask variable was created that will get all that is in task
            const newTasks = [...tasks, {

                title: taskTitle,
                id: uuidv4(),
                completed: false,

            },
          ];

            //modifying the tasks
            setTasks(newTasks);
    };

    // removing tasks
    const handleTaskDeletion = (taskId) => {

        const newTasks = tasks.filter(task => task.id !== taskId)

            setTasks(newTasks)
    }

  return(

        <Router>

            <div className={styles.container}>

              <Header />

                <Route

                      path="/" exact render={() => (

                            <>

                              <AddTask handleTaskAdd={handleTaskAdd} />

                              <Tasks 
                                  tasks={tasks} 
                                      handleTaskClick={handleTaskClick}
                                        handleTaskDeletion={handleTaskDeletion}
                               />

                            </>
                      )}

                />

                <Route path="" exact render={TaskDetails} />

              </div>   

        </Router>
  )

} 

export default App