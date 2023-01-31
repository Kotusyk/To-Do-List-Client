import {useEffect, useState} from 'react'
import axios, { Axios } from "axios"
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import {ITask} from "./interface/Interfaces"



function App() {

  const [showAddTask, setShowAddTask] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Array<ITask>>([]); 

  
//Render getting task
  useEffect( () =>{
    const  getTasks = async () => {
    try {
      const response = await axios.get("https://localhost:7116/api/ToDoTasks/GetAll")
     await setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
 getTasks();
 
}, [])
    

// Add task
const addTask = (task:ITask):void =>{  
  axios.post('https://localhost:7116/api/ToDoTasks/Create', task)
  .then(resp =>{
    console.log(resp.data)
    const newData =[...tasks, resp.data]
    setTasks(newData)
  })
  
}
// Update Task
const updateTask = ( updatedTask:ITask ) => {
  axios.put('https://localhost:7116/api/ToDoTasks/', updatedTask)
  .then(resp => {
    setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task ))
    
  }).catch((error) => {
    console.error(error)
  })
}

// Delete Task
const deleteTask: (id:number) => void = (id:number ) => {
  
  let deleteConfirmation = window.confirm('Do you realy want delete this task?'); 
  
    if(deleteConfirmation){
      axios.delete('https://localhost:7116/api/ToDoTasks/'+id)
    .then(resp =>{
      setTasks(tasks.filter((task:ITask) => task.id !== id))
    })
  } 
}

return (
  <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length !== 0  ? (tasks.map((task) => (<Task key ={task.id} task={task} onDelete = {deleteTask} 
    onUpdate={updateTask} />))) : ('No tasks yet')} 
    </div>
  );
}


export default App;
