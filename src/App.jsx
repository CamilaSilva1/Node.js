/*Desenvolvido por Camila Silva em 15/03/2022*/
/* Main page */

//Libraries
import React, { useState, useEffect } from 'react' 
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios'

import styles from './css/App.module.css'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import Header from './Components/Header'
import TaskDetails from './Components/TaskDetails'

const App = () => {

  //state of the tasks with array
  const [tasks, setTasks] = useState([]);

        
  // updating tasks when the component is build 
  useEffect(() => {

      const fetchTasks = async () => {

        const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");

        setTasks(data);

      }

      fetchTasks();

  }, []);

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
//navigation between screens using components
    <Router>

    <div className={styles.container}>

      {/* title */}
      <Header />

      {/*calling a bar to add a new task */}
      <AddTask handleTaskAdd={handleTaskAdd} />

        <Routes>

         <>

              {/* show all the tasks */}
              <Route path='/' element={  <Tasks 
                                            tasks={tasks} 
                                            handleTaskClick={handleTaskClick}
                                            handleTaskDeletion={handleTaskDeletion} /> }/>
       
         </>

              {/* show task details */}
              <Route path='/:taskTitle' element={<TaskDetails />} />

        </Routes>

      </div>   

  </Router>
  )

} 

export default App