import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList'
import { initialState, todoReducer } from './reducers/todoReducer'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [task, setTask] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({
      type: 'add', payload: {
        title: task,
        completed: false,
        id: state.todoItems.length
      }
    })
  }

  const handleChange = event => {
    setTask(event.target.value)
  }

  const toggle = (id) => {
    dispatch({ type: 'toggle', payload: id })
  }

  const clear = () => {
    dispatch({ type: 'clear' })
  }
  console.log(state)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name='addTasks' type='text' placeholder='Add a new task' onChange={handleChange} value={initialState.title} />
        <button type='submit'> Add Task</button>
        <button onClick={() => clear}>Clear Completed</button>
      </form>
      <TodoList tasks={state.todoItems} toggle={toggle} />
    </div>
  );
}

export default App;
