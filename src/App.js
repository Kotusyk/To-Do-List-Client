import {useEffect, useState} from 'react'
import axios, { Axios } from "axios"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// const axios = require('axios');

//import styled from "styled-components";

function App() {
  // const baseUrl = 'https://localhost:7116/api/ToDoTasks/';
  const [data, setData] = useState(
    {
      title: '',
      date: '',
      status: false,
      urgently: false,
    }
  );
  const [showAddTask, setShowAddTask] = useState(false)//(true)
  const [inProgress, setInProgress] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          title: 'Clean room',
          date: "12/03/2023 10:30",
          status: false,
          urgently: false,
      }
    ]
    );
    
 
    
    async function getTasks() {
      try {
        const response = await axios.get("https://localhost:7116/api/ToDoTasks/GetAll")
        setTasks(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    //Render getting task
useEffect( () =>{
  getTasks();
  // axios.get("https://localhost:7116/api/ToDoTasks/GetAll")
  // .then(function (response) {
  //   // handle success
  //   setTasks(response.data);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
 // })
}, [])
    
//Rendering creating task 
// useEffect( () =>{
//   axios.post("https://localhost:7116/api/ToDoTasks/Create", {
//     data: {
//       id: task.id,   
//       title: task.title,
//       date: task.date,
//       status: task.status,
//       urgently: task.urgently
        
//     }
//   }).then((response) => {
//         console.log(response)
//   }).catch(err => console.log(err))
// }, [])

// axios({
//   method: 'POST',
//   url: 'https://localhost:7116/api/ToDoTasks/Create',
//   data:{
//     title: task.title,
//     date: task.date,
//     status: task.status,
//     urgently: task.urgently,
//   }
//})

 // Add task

// Delete Task
const deleteTask = (id) => {
  axios.delete('https://localhost:7116/api/ToDoTasks/'+id)
  .then(resp =>{
    console.log(resp.data)
    setTasks(tasks.filter((task) => task.id !== id))
  })
}
// Color staus
const toggleStatusColor = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, status: !task.status} : task) )
}

const setProgress = () => {
  setInProgress(!inProgress)
}

const addTask = (task) =>{
  // const generetedId = Math.floor(Math.random() * 
  // 10000) + 1 
  // task.id = generetedId

  axios.post('https://localhost:7116/api/ToDoTasks/Create', task)
  .then(resp =>{
    console.log(resp.data)
    const newData=[...tasks, resp.data]
    setTasks(newData)
  })
//  const newTask = {...task}
//  setTasks([...tasks, newTask])
}
const updateTask = ( updatedTask ) => {

  console.log("update ", updatedTask )

  axios.put('https://localhost:7116/api/ToDoTasks/', updatedTask)
  .then(resp => {
   
    console.log("App:  ", resp.data)

     setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task ))
    
  }).catch((error) => {
    console.error(error)
  })
  
}

  return (
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {<AddTask onAdd={addTask}/>}

    {tasks.length > 0 || !null ? (<Tasks tasks={tasks}
       onDelete={deleteTask}  onToggle={toggleStatusColor} 
       onClick={setProgress} inProgress={inProgress}
       onUpdate={updateTask} settingTask={setTasks}
        />) : ('No tasks yet')} 
    </div>
  );
}


export default App;

