import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  SET_CURRENT,
  CLEAR_TODOLIST,
  UPDATE_TODOLIST,
} from '../types';

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
