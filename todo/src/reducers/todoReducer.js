
export const initialState = {
    todoItems: [{
        title: 'first',
        completed: false,
        id: 0
    }]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add': return { ...state, todoItems: [...state.todoItems, action.payload] }
        case 'toggle': return { ...state, todoItems: [...state.todoItems, state.todoItems[action.payload].completed = true] }
        case 'clear': return { todoItems: [state.todoItems.filter(item => item.completed === false)] }
        default: return state
    }
}