import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store';
import Root from './components/Root';
import fetchTodos from './api/index';

fetchTodos('all').then(todos => console.log(todos));

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
