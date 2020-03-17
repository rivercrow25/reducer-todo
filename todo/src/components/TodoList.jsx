import React from 'react'
import Todo from './Todo'

const TodoList = ({ tasks, toggle }) => {
    console.log(tasks)
    return (
        <div>
            {tasks.map(item => {
                return (
                    <div>
                        <Todo key={item.id} task={item} toggle={toggle} />
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList