import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/container/TodoApp';
import store from './redux/store';

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
