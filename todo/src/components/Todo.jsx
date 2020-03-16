import React from 'react'

const Todo = ({ task, toggle }) => {
    return (
        <div onClick={() => toggle(task.id)}>
            <h2 className={task.completed ? 'completed' : ''}>{task.title}</h2>
        </div>
    )
}

export default Todo