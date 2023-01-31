import React from 'react'
import { useState} from 'react'
import {IEditPropTypes} from "../interface/Interfaces"


const statusOptions:Array<string> = [
  "To Do", "In Progress", "Done"
];


const EditTask = ({onUpdate, task, editTaskChanged} : IEditPropTypes) => {
 
  const id = task.id;
  const [title, setTitle] = useState(task.title)
  const [date, setDate] = useState(task.date)
  const [status, setStatus] = useState<string>(task.status)
  const [urgently, setUrgently] = useState(task.urgently)

  

  const [statusIndex, setStatusIndex] = useState(statusOptions.findIndex((status) => task.status === status));

  if(statusIndex === -1 ){
    setStatusIndex(0);
  }
 
const updatedTask = {id, title, date, status, urgently, editTaskChanged}

const changeTaskStatus = () => {
  setStatusIndex((statusIndex + 1) % statusOptions.length);
  return statusOptions[statusIndex];
}
 const toggleStatus = (e : any) => {
  e.preventDefault();
  setStatus(changeTaskStatus())
 } 

const onSubmit = (e : any) =>{
  e.preventDefault();
  onUpdate(updatedTask)
}


  return (
    <form>
      <div className='form-control'>
        <label>Title</label>
        <input
         type="text" placeholder='Edit Task' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input type="text" placeholder='Add day and time' value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Status:  </label>
        <button className="btn" onClick={(e) => toggleStatus(e)}>{status}</button>
      </div>
      <div className='form-control form-control-check'>
        <label>It's urgently? </label>  
        <input type="checkbox" checked={urgently} onChange={(e) => setUrgently(!urgently)}/>
      </div>
      <input className='btn btn-block' type='submit' value="Edit Task" onClick={onSubmit} />
      <button className='btn btn-block'  onClick={editTaskChanged}>Close</button>
    </form>
  
  )
}

export default EditTask
