export const getErrorMessage = state => state.errorMessage;
export const IsFetching = state => state.isFetching;
export const getIds = state => state.ids;
export const getTodo = (state, id) => state[id];

export const getVisibleTodos = (state, filter) => {
  const ids = getIds(state.listByFilter[filter]);
  return ids.map(id => getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  IsFetching(state.listByFilter[filter]);
