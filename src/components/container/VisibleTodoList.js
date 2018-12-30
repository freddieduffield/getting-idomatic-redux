import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../../redux/reducers';
import { toggleTodo } from '../../redux/Todos/todos';
import { TodoList } from '../presentational/index';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all')
});

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);

export default VisibleTodoList;
