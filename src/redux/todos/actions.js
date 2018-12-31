import { normalize } from 'normalizr';
import * as schema from '../schema';
import * as api from '../../api/index';
import * as selector from './selectors';
import {
  TOGGLE_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS
} from './types';

export const fetchTodos = filter => (dispatch, getState) => {
  if (selector.getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: FETCH_TODOS_REQUEST,
    filter
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfTodos)
      });
    },
    error => {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        filter,
        message: error.message || 'something went wrong'
      });
    }
  );
};

export const addTodo = text => dispatch =>
  api.addTodo(text).then(response => {
    dispatch({
      type: FETCH_TODOS_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });

export const toggleTodo = id => dispatch =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });
