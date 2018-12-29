import React from 'react';
import { Footer } from '../presentational/index';
import VisibleTodoList from '../container/VisibleTodoList';
import AddTodo from '../container/AddTodo';

const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default TodoApp;
