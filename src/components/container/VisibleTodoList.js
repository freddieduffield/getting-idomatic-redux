import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../../redux/reducers';
import * as actions from '../../redux/Todos/todos';
import { TodoList } from '../presentational/index';
import { fetchTodos } from '../../api/index';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, recieveTodos } = this.props;
    fetchTodos(filter).then(todos => recieveTodos(filter, todos));
  }
  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
  }
}

fetchTodos('all').then(todos => console.log(todos));

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleTodoList)
);

export default VisibleTodoList;
