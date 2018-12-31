import { combineReducers } from 'redux';
import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS
} from './types';

import * as selector from './selectors';

const byId = (state = {}, action) => {
    if (action.response) {
      return {
        ...state,
        ...action.reponse.entities.todos,
      }
    }
    return state;
  }
};

const createList = filter => {
  const handleToggle = (state, action) => {
    const { result: toogleId, entities} = action.reponse;
    const { completed } = entities.todos[toggleId];
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    );
    return shouldRemove ? 
      state.filter(id => id !== toggledId) :
      state;
  };
  // eslint-disable-line arrow-body-style
  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_TODOS_SUCCESS:
        return filter === action.filter
          ? action.response.result
          : state;
      case ADD_TODO_SUCCESS:
        return filter !== 'completed' ? [...state, action.response.result] : state;
      case TOGGLE_TODO_SUCCESS:
        return handleToggle(state, action)  
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
