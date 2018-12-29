// Constants
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
let nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  id: (nextTodoId++).toString(),
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// Reducer
// reducer always passed to arguments state and action

const todo = (state, action) => {
  // each action is passed to the reducer
  switch (action.type) {
    //   if add todo action is dispatched...
    case ADD_TODO:
      // return an object containing id, text and whether or not it is completed
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    //   If the Toggle todo action is dispatched
    case TOGGLE_TODO:
      // id the state id is not equal to action id, return simply state
      if (state.id !== action.id) {
        return state;
      }
      //   Else return  state and state completed
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
