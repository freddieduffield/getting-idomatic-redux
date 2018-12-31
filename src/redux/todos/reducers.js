import { combineReducers } from 'redux';
import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST
} from './types';

import * as selector from './selectors';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

const createList = filter => {
  // eslint-disable-line arrow-body-style
  const ids = (state = [], action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_TODOS_SUCCESS:
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        return true;
      case FETCH_TODOS_SUCCESS:
      case FETCH_TODOS_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_TODOS_FAILURE:
        return action.message;
      case FETCH_TODOS_REQUEST:
      case FETCH_TODOS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  });
};

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

export const getErrorMessage = (state, filter) =>
  selector.getErrorMessage(state.listByFilter[filter]);
