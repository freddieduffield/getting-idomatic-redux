import React from 'react';
import store from '../../redux/store';
import { ADD_TODO, TOGGLE_TODO } from '../../redux/Todos/todos';
import {
  getVisibleTodos,
  SET_VISIBILITY_FILTER
} from '../../redux/VisibilityFilter/VisibilityFilter';
import { AddTodo, Footer, TodoList } from '../presentational/index';

let nextTodoId = 0;

const TodoApp = ({ todos, visibilityFilter }) => {
  return (
    <div>
      <AddTodo
        onAddClick={text =>
          store.dispatch({
            type: ADD_TODO,
            id: nextTodoId++,
            text
          })
        }
      />
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={id =>
          store.dispatch({
            type: TOGGLE_TODO,
            id
          })
        }
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={filter =>
          store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter
          })
        }
      />
    </div>
  );
};

export default TodoApp;
