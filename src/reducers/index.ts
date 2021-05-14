import { combineReducers } from 'redux';
import { Todos } from '../actions';
import { todosReducer } from './todos';
export interface StoreState {
    todos: Todos[]
}
export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});
