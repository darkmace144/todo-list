import { configureStore } from "@reduxjs/toolkit";
import { ActionTypes, ADD_TODO, DELETE_TODO, SET_TODO_TITLE, SET_TODO_DESCRIPTION, TOGGLE_TODO } from "./actions";
import { Todo, TodoState } from "./types";

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], title: string, description: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    title,
    description,
    done: false,
  },
];

const reducer = (state: TodoState = {
  todos: [],
  newTodoTitle: "",
  newTodoDescription: ""
}, action: ActionTypes): TodoState => {
  switch (action.type) {
    case SET_TODO_TITLE:
      return {
        ...state,
        newTodoTitle: action.payload,
      };
      case SET_TODO_DESCRIPTION:
        return {
          ...state,
          newTodoDescription: action.payload,
        };
    case ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, state.newTodoTitle, state.newTodoDescription),
        newTodoTitle: "",
        newTodoDescription: ""
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload),
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer
});

export default store;