import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'


const EditTask = ({onUpdate, task, show, editTaskChanged,  availableStatuses}) => {


  // console.log("ed, task: ", task)
  const id = task.id;

   

    const [title, setTitle] = useState(task.title)
    const [date, setDate] = useState(task.date)
    const [status, setStatus] = useState(task.status)
   //const status = task.status
    const [urgently, setUrgently] = useState(task.urgently)


  const [statusIndex, setStatusIndex] = useState(availableStatuses.findIndex((status) => task.status === status));
  if(statusIndex == -1 ){
    setStatusIndex(0);
  }
const updatedTask = {id, title, date, status, urgently}

// console.log("EDIT FORM updtask: ", updatedTask)
const changeTaskStatus = () => {
  setStatusIndex((statusIndex + 1) % availableStatuses.length);
  return availableStatuses[statusIndex];
}
 const toggleStatus = (e) => {
  e.preventDefault();
  setStatus(changeTaskStatus())
 } 

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
    // <Modal  show={true} onHide={onClose} fade='false'
    //                style={{width: "200px", display: "block"}}>
    //    <Modal.Body>
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
        <label>Status:  </label>
        <button onClick={(e) => toggleStatus(e)}>{status}</button>
      </div>
      <div className='form-control form-control-check'>
        <label>It's urgently? </label>  
        <input type="checkbox" checked={urgently} onChange={(e) => setUrgently(!urgently)}/>
      </div>

      <input className='btn btn-block' type='submit' value="Edit Task" onClick={onSubmit} />
      {/* <button className='btn btn-block'  onClick={editTaskChanged}>Close</button> */}
    </form>
    // </Modal.Body>
    // </Modal> type='submit' value="Close"
  )
}

export default EditTask
