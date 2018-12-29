import React from 'react';
import { AddTodo, Footer } from '../presentational/index';
import VisibleTodoList from '../container/VisibleTodoList';

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
