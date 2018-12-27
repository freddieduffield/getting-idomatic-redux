import { combineReducers } from 'redux';
import todos from './Todos/todos';
import visibilityFilter from './VisibilityFilter/VisibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
