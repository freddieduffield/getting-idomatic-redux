const todo = (state, action) => {
  // each action is passed to the reducer
  switch (action.type) {
    //   if add todo action is dispatched...
    case 'ADD_TODO':
      // return an object containing id, text and whether or not it is completed
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    //   If the Toggle todo action is dispatched
    case 'TOGGLE_TODO':
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

export default todo;
