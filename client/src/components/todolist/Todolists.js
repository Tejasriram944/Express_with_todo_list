import React, { Fragment, useContext } from 'react';
import TodolistItem from './TodolistItem';
import TodolistContext from '../../context/todolist/todolistContext';

const Todolist = () => {
  const todolistContext = useContext(TodolistContext);

  const { todolists } = todolistContext;
  return (
    <Fragment>
      {todolists.map((todolist) => (
        // <h3>{todolist.taskname}</h3>
        <TodolistItem key={todolist.id} todolist={todolist} />
      ))}
    </Fragment>
  );
};

export default Todolist;
