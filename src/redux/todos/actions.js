import * as api from '../../api/index';
import * as selector from './selectors';
import {
  ADD_TODO,
  TOGGLE_TODO,
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
        response
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
      response
    });
  });

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
