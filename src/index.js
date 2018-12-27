import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

const render = () => {
  ReactDOM.render(
    <App todos={store.getState().todos} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
