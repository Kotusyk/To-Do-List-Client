import {useState} from 'react' 
import { IAddPropType } from '../interface/Interfaces'

const AddTask = ({onAdd} : IAddPropType) => {
  const [title, setTitle] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [status, setStatus] = useState<string>('To Do')
  const [urgently, setUrgently] = useState<boolean>(false)
    
   
const onSubmit = (e:any) => {
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
    <form className='add-form' onSubmit={onSubmit}  >
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
        <p className='btn'>{status}</p> 
      </div>
      <div className='form-control form-control-check'>
        <label>It's urgently? </label>
        <input type="checkbox" checked={urgently}
           onChange={(e) => setUrgently(e.currentTarget.checked)}/>
      </div>
      <input className='btn btn-block' type='submit' value="Create Task"/>
    </form>
  )
}

export default AddTask
