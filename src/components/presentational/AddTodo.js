import React from 'react';
import store from '../../redux/store';

let nextTodoId = 0;

const AddTodo = () => {
  let input;
  return (
    <div>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
          });
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
