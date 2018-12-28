import React from 'react';
import store from '../../redux/store';
import { TodoList } from '../presentational/index';
import { getVisibleTodos } from '../../redux/VisibilityFilter/VisibilityFilter';

class VisibleTodoList extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

export default VisibleTodoList;
