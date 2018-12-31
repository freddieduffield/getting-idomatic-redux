import { combineReducers } from 'redux';
import * as fromTodos from './todos/selectors';
import todos from './todos/reducers';

const todoApp = combineReducers({
  todos
});

export default todoApp;

// Selector
export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);
