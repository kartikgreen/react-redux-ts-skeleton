import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
const url = 'https://jsonplaceholder.typicode.com/todos';
export interface Todos {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}
export interface FetchTodosActions {
    type: ActionTypes.fetchTodos,
    payload: Todos[]
}
export interface DeleteTodosActions {
    type: ActionTypes.deleteTodos,
    payload: number;
}
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todos[]>(url);
        dispatch<FetchTodosActions>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};
export const deleteTodos = (id: number): DeleteTodosActions => {
    return {
        type: ActionTypes.deleteTodos,
        payload: id
    }
}