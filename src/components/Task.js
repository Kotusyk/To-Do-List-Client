import {useState} from 'react'
import {FaTimes, FaPencilAlt, FaTrashAlt, FaSave} from 'react-icons/fa'
import EditTask from './EditTask'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//onToggle, onEditClicked, inProgress,


const Task = ({task, setTasks, onDelete,  onUpdate, statusOptions}) => {  
  const [show, setShow] = useState(false);
  const editTaskChanged = () =>{setShow(!show)}
  
  return (
    <div className={`task  ${task.urgently ? 'urgently': '' }`} >
    <h3>{task.title} <FaTrashAlt style={{color: '#A93535', cursor:'pointer'}}  onClick={() => onDelete(task.id)}/></h3>
    <p>{task.date} { !show ? (<FaPencilAlt style={{cursor:'pointer'}} onClick={() => editTaskChanged()}/>) : 
                            (<FaSave style={{cursor:'pointer'}} onClick={() => editTaskChanged()}/>)}</p>

    {show && <EditTask onUpdate={onUpdate} task={task} availableStatuses={statusOptions} show={show} setShow={editTaskChanged}/>}
    
    {/* <FaTimes style={{color: 'red', cursor:'pointer'}} */}
    {/* settingTask={settingTask} show={show} onClose={handleClose} */}
    {/* {active  &&  <EditTask onUpdate={onUpdate} task={task} settingTask={settingTask}/>} */}
    {/* <Modal active={active} setActive={setActive} >
        {/*  
    </Modal> */}
    {/* onClick={() => setActive(true)} */}
    
    </div>
    )

  }
  
  export default Task
  
  {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
      <Modal.Footer>
              <button className='btn btn-block' onClick={handleClose}>
                  Close Button
              </button>
      </Modal.Footer>
  </Modal> */}
  
  
  {/* <Modal.Footer>
  {/* <Button variant="secondary" onClick={handleClose}>
  Close Button
</Button> Modal.Footer> */}