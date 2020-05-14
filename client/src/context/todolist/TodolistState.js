import React, { useReducer } from 'react';
import uuid from 'uuid/dist/v4';
import TodolistContext from './todolistContext';
import todolistReducer from './todolistReducer';
import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  SET_CURRENT,
  CLEAR_TODOLIST,
  UPDATE_TODOLIST,
} from '../types';

const TodolistState = (props) => {
  const initialState = {
    todolists: [
      {
        id: 1,
        taskname: 'first task',
        description: 'first description',
        type: 'completed',
      },
      {
        id: 2,
        taskname: 'Second task',
        description: 'second description',
        type: 'incompleted',
      },
      {
        id: 3,
        taskname: 'Third task',
        description: 'Third description',
        type: 'incompleted',
      },
    ],
  };
  const [state, dispatch] = useReducer(todolistReducer, initialState);

  // Add List
  const addTask = (todolist) => {
    todolist.id = uuid.v4();
    dispatch({ type: ADD_TODOLIST, payload: todolist });
  };

  // Delete List

  // Set List

  // Clear Current List

  // Update List

  return (
    <TodolistContext.Provider
      value={{
        todolists: state.todolists,
        // addTask,
      }}
    >
      {props.children}
    </TodolistContext.Provider>
  );
};

export default TodolistState;
