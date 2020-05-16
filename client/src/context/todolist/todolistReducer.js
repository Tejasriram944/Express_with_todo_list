import { ADD_TODOLIST } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todolists: [...state.todolists, action.payload],
      };
    default:
      return state;
  }
};
