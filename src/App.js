import {useEffect, useState} from 'react'
import axios, { Axios } from "axios"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Modal from './components/Modal';
import EditTask from './components/EditTask';



function App() {


  const [showAddTask, setShowAddTask] = useState(false)//(true)
  const [inProgress, setInProgress] = useState(false)
  const statusOptions = [
    'To Do', 'In Progress', 'Done'
  ];
  const [tasks, setTasks] = useState([

  ]); 

  useEffect( () =>{

    const  getTasks = async () => {
    try {
      const response = await axios.get("https://localhost:7116/api/ToDoTasks/GetAll")
     await setTasks(response.data)
    } catch (error) {
      console.error(error);
    }
  }

    getTasks();
  }, [])
    

    //Render getting task

        
// Add task

// Delete Task
const deleteTask = (id) => {

 let deleteConfirmation = window.confirm('Do you realy want delete this task?'); 

if(deleteConfirmation){
  axios.delete('https://localhost:7116/api/ToDoTasks/'+id)
  .then(resp =>{
      setTasks(tasks.filter((task) => task.id !== id))
  })
} 
}

// Color status


const addTask = (task) =>{  
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
  axios.put('https://localhost:7116/api/ToDoTasks/', updatedTask)
  .then(resp => {
    
    setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task ))
    
  }).catch((error) => {
    console.error(error)
  })
  }



return (
  <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask} availableStatuses={statusOptions}/>}

    {tasks.length > -1  ? (<Tasks tasks={tasks} onDelete={deleteTask} 
    //  onToggle={toggleStatusColor} 
      //  onClick={setProgress} inProgress={inProgress}       
       onUpdate={updateTask} settingTask={setTasks}
       statusOptions={statusOptions}
       />) : ('No tasks yet')} 
      {/* <Modal active={modalActive} setActive={setActive} onUpdate={onUpdate} task={task} settingTask={settingTask}>
        <EditTask onUpdate={updateTask} task={task} settingTask={settingTask}/>
    </Modal> */}
    </div>
  );
}


export default App;

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
