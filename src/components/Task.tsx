import {useState} from 'react'
import {FaPencilAlt, FaTrashAlt, FaSave} from 'react-icons/fa'
import EditTask from './EditTask'
import {ITaskPropTypes} from "../interface/Interfaces"


const Task = ({task, onDelete, onUpdate} : ITaskPropTypes) => {  
  
  const [show, setShow] = useState<boolean>(false);
  const editTaskChanged = ():any =>{setShow(!show)}

return (
  <div className={`task ${(task.status === 'In Progress') ? 'task statusInProgress':''}
    ${(task.status === 'Done') ? 'task statusDone':''} ${task.urgently ? 'urgently': '' }`} >
    <h3>{task.title} <FaTrashAlt style={{color: '#A93535', cursor:'pointer'}}  onClick={() => onDelete(task.id)}/></h3>
    <p>{task.date}  {!show ? (<FaPencilAlt style={{cursor:'pointer'}} onClick={() => editTaskChanged()}/>) : 
      (<FaSave style={{cursor:'pointer'}} onClick={() => editTaskChanged()}/>)} </p>
    {show && (<EditTask task={task} onUpdate={onUpdate} editTaskChanged={editTaskChanged}/>)}
    </div>
    )

  }
  
  export default Task
  
 