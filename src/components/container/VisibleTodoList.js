import { connect } from 'react-redux';
import { TodoList } from '../presentational/index';
import { toggleTodo } from '../../redux/Todos/todos';
import { filters } from '../../redux/VisibilityFilter/VisibilityFilter';

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case filters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
