import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditTask = ({onUpdate, task}) => {


  console.log("ed, task: ", task)
  const id = task.id;
   //Render getting task
  //  useEffect( () =>{
  //   axios.get("https://localhost:7116/api/ToDoTasks/GetById"+id)
  //   .then(function (response) {
  //     // handle success
  //     settingTask(response.data);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // }, [])  
   

    const [title, setTitle] = useState(task.title)
    const [date, setDate] = useState(task.date)
   // const [status, setStatus] = useState(task.status)
   const status = task.status
    const [urgently, setUrgently] = useState(task.urgently)

const updatedTask = {id, title, date, status, urgently}

console.log("EDIT FORM updtask: ", updatedTask)


const onSubmit = (e) =>{

 // console.log("EDIT FORM: ", updatedTask)
    e.preventDefault();
     onUpdate(updatedTask)
}
// const onSubmit = (e) => {
//     e.preventDefault()

//     if(!title){
//         alert('Please edit a task title')
//         return
//     }

//     onEdit({title, date, status, urgently})

//     setTitle('')
//     setDate('')
//     setStatus(false)
//     setUrgently(false)  
// }
  return (
    <form>
      <div className='form-control'>
        <label>Title</label>
        <input
         type="text" placeholder='Edit Task' value={title} onChange={(e) => setTitle(e.target.value)}
         />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input type="text" placeholder='Add day and time' value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>It's urgently? </label>
        <input type="checkbox" checked={urgently} onChange={(e) => setUrgently(!urgently)}/>
      </div>

      <input className='btn btn-block' type='submit' value="Edit Task" onClick={onSubmit} />
    </form>
  )
}

export default EditTask
