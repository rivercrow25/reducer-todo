
export const initialState = {
    todoItems: []
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add': return { ...state, todoItems: [...state.todoItems, action.payload] }
        case 'toggle': return { ...state, todoItems: [...state.todoItems, state.todoItems[action.payload].completed = true] }

        default: return state
    }
}