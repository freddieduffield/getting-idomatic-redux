import React from 'react';
import { AddTodo, Footer } from '../presentational/index';
import VisibleTodoList from '../container/VisibleTodoList';

const TodoApp = ({ store }) => {
  return (
    <div>
      <AddTodo store={store} />
      <VisibleTodoList store={store} />
      <Footer store={store} />
    </div>
  );
};

export default TodoApp;
