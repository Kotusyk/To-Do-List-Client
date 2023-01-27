import {useState} from 'react'
import { Modal, Button} from 'react-bootstrap'
import {FaTimes, FaPencilAlt} from 'react-icons/fa'
import EditTask from './EditTask'
//import Modal from './Modal'



// const setInProgress = () => {
//   !inProgress
// }

const Task = ({task, onDelete, onToggle, onClick, inProgress, onUpdate, settingTask}) => {  
  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className={`task ${task.status ? 'status':''} ${task.urgently ? 'urgently': '' }`} onDoubleClick={() => onToggle(task.id)}>
    <EditTask onUpdate={onUpdate} task={task} settingTask={settingTask}/>
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
      <h3>{task.title} <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
      <p>{task.date} <FaPencilAlt style={{cursor:'pointer'}} onClick={handleShow}/></p>
    </div>
  )
  
}

export default Task



{/* <Modal.Footer>
{/* <Button variant="secondary" onClick={handleClose}>
    Close Button
</Button> Modal.Footer> */}