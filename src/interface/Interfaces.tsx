
export interface ITask {
    id: number,
    title: string,
    date: string,
    status: string,
    urgently: boolean
}

export interface IHeaderPropTypes  {
    onAdd:any,
    showAdd:boolean
}
export interface IButtonPropTypes  {
    color: string,
    text: string,
    onClick: any,
}

export interface ITaskPropTypes  {
    task: ITask,
    onDelete: any,
    onUpdate: any,
}

export interface IEditPropTypes {
  task: ITask,
  onUpdate: any,
  editTaskChanged: any
}

export interface IAddPropType {
    onAdd: any
}


