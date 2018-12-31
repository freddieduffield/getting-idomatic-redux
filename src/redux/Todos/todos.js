import { v4 } from 'uuid';
import { combineReducers } from 'redux';
import * as api from '../../api/index';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

// Constants
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators

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

// reducers

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const todos = combineReducers({
  byId,
  listByFilter
});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);
