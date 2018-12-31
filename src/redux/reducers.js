import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos/selectors';

const todoApp = combineReducers({
  todos
});

export default todoApp;

// Selector
export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);
