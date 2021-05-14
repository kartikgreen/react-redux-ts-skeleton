import { DeleteTodosActions, FetchTodosActions } from './todos';
export enum ActionTypes {
    fetchTodos,
    deleteTodos
}

export type Action = FetchTodosActions | DeleteTodosActions;