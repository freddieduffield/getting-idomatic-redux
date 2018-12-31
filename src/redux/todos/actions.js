import { v4 } from 'uuid';
import * as api from '../../api/index';
import * as selector from './selectors';

const requestTodos = filter => ({
  type: 'REQUEST_TODOS',
  filter
});

const recieveTodos = (filter, response) => ({
  type: 'RECIEVE_TODOS',
  filter,
  response
});

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));

  return api
    .fetchTodos(filter)
    .then(response => recieveTodos(filter, response));
};

export const addTodo = text => ({
  type: ADD_TODO,
  id: v4(),
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
