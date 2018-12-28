import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/scene/TodoApp';
import { createStore } from 'redux';
import todoApp from './redux/reducers';

ReactDOM.render(
  <TodoApp store={createStore(todoApp)} />,
  document.getElementById('root')
);
