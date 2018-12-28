import React from 'react';

const AddTodo = ({ onAddClick }) => {
  let input;
  return (
    <div className="">
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;