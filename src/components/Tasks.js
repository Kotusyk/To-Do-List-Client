import Task from "./Task"


const Tasks = ({tasks, onDelete,
   onUpdate, 
  settingTask, statusOptions}) => {
return (
<div>
{tasks.map((task) => (
<Task key ={task.id} task={task} 
onDelete = {onDelete} 
onUpdate={onUpdate} settingTask={settingTask}
statusOptions={statusOptions}/>
))}
</div>
)
}

export default Tasks
// inProgress, onToggle,

//onToggle ={onToggle}
// onClick, onClick={onClick} inProgress={inProgress}