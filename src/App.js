import React, { Component } from 'react';
import store from './redux/store';
import { ADD_TODO } from './redux/Todos/todos';

let nextTodoId = 0;

class App extends Component {
  componentDidMount() {
    console.log(this.props.todos);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: ADD_TODO,
              text: this.input.value,
              id: nextTodoId++
            });
            this.input.value = '';
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
