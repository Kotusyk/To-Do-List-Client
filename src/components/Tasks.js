import Task from "./Task"


const Tasks = ({tasks, onDelete, onToggle, onClick, inProgress, onUpdate}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key ={task.id} task={task}
         onDelete = {onDelete} onToggle ={onToggle}
          onClick={onClick} inProgress={inProgress}
          onUpdate={onUpdate}/>
      ))}
    </div>
  )
}

export default Tasks
