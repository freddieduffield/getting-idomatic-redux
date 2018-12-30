import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import TodoApp from './scene/TodoApp';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:filter?" render={props => <TodoApp {...props} />} />
    </BrowserRouter>
  </Provider>
);

export default Root;
