import React from 'react'
import {useState} from 'react' 


const AddTask = ({onAdd, availableStatuses}) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('To Do')
    const [urgently, setUrgently] = useState(false)
    
    // const [statusIndex, setStatusIndex] = useState(availableStatuses.findIndex((status) => task.status === status));
    // if(statusIndex == -1 ){
    //   setStatusIndex(0);
    // }
    // const changeTaskStatus = () => {
    //   setStatusIndex((statusIndex + 1) % availableStatuses.length);
    //   return availableStatuses[statusIndex];
    // }
const onSubmit = (e) => {
    e.preventDefault()

    if(!title){
        alert('Please add a task title')
        return
    }

    onAdd({title, date, status, urgently})

    setTitle('')
    setDate('')
    setStatus('To Do')
    setUrgently(false)  
}
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input
         type="text" placeholder='Add Task'
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Date & Time</label>
        <input type="text" placeholder='Add day and time'
         value={date}
         onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Status: </label>
        <button>{status}</button>
      </div>
      <div className='form-control form-control-check'>
        <label>It's urgently? </label>
        <input type="checkbox" checked={urgently}  value={urgently}
           onChange={(e) => setUrgently(e.currentTarget.checked)}/>
      </div>

      <input className='btn btn-block' type='submit' value="Create Task"/>
    </form>
  )
}

export default AddTask
