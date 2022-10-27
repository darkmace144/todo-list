export const SET_TODO_TITLE = 'SET_TODO_TITLE';
export const SET_TODO_DESCRIPTION = 'SET_TODO_DESCRIPTION';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export type ActionTypes =
    | { type: typeof SET_TODO_TITLE; payload: string }
    | { type: typeof SET_TODO_DESCRIPTION; payload: string }
    | { type: typeof ADD_TODO}
    | { type: typeof DELETE_TODO; payload: number }
    | { type: typeof TOGGLE_TODO; payload: number };
    
export const setTodoTitle = (title: string): ActionTypes => ({
    type: SET_TODO_TITLE,
    payload: title, 
});

export const setTodoDescription = (description: string): ActionTypes => ({
    type: SET_TODO_DESCRIPTION,
    payload: description, 
});

export const addTodo = (): ActionTypes => ({
    type: ADD_TODO,
});

export const deleteTodo = (id: number): ActionTypes => ({
    type: DELETE_TODO,
    payload: id,
});

export const toggleTodo = (id: number): ActionTypes => ({
    type: TOGGLE_TODO,
    payload: id,
});
