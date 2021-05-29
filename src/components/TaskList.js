import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const ourTaskList = useSelector(state => state.TaskReducer.taskList)
    return (
        <div>
            {
                ourTaskList.map(todo=> <TaskItem todo={todo} key={todo.id}/>)
            }
        </div>
    )
}

export default TaskList
