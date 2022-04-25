import React from 'react'
import DeleteTask from './DeleteTask'

export default function AllTasks(props) {
  return (
    <div className='task-list'>
        <ul>
            {
                props.tasks && props.tasks.map( (task, index) => {
                    return(
                        <li key={index} className={task.isDone ? 'done' : ''} >
                            {task.title}: {task.description}
                            <DeleteTask deleteTask={props.deleteTask} index={index} />
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
