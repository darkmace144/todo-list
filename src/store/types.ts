export interface Todo {
    id: number;
    title: string;
    description: string;
    done: boolean;
}

export interface TodoState {
    todos: Todo[];
    newTodoTitle: string;
    newTodoDescription: string;
}
