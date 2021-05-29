import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../js/action/TaskAction'

const TaskItem = ({todo}) => {
    const dispatch = useDispatch()
    return (
   <div>
        <div style={{textDecoration:todo.isDone?"line-through":null}}>{todo.task}</div>
        <button onClick={()=>dispatch(completeTask(todo.id))}>{todo.isDone?"Undo":"Complete"}</button>
        <button>edit</button>
        <button onClick={()=>dispatch(deleteTask(todo.id))}>delete</button>
    </div>
    )
}

export default TaskItem
