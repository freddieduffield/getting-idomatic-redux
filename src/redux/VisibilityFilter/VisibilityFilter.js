//Constants
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// Reducer

const VisibilityFilter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default VisibilityFilter;
