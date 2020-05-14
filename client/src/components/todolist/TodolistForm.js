import React, { useState, useContext } from 'react';
import TodolistContext from '../../context/todolist/todolistContext';

const TodolistForm = () => {
  const todolistContext = useContext(TodolistContext);

  const [todolist, setTask] = useState({
    taskname: '',
    description: '',
    type: 'incomplete',
  });

  const { taskname, description, type } = todolist;

  const onChange = (e) =>
    setTask({ ...todolist, [e.target.taskname]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    todolistContext.addTask(todolist);
    setTask({
      taskname: '',
      description: '',
      type: 'incomplete',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Task</h2>
      <input
        type='text'
        placeholder='enter the task name'
        name='taskname'
        value={taskname}
        onChange={onChange}
      />
      <textarea
        placeholder='enter the description of task '
        rows='8'
        cols='50'
        name='description'
        value={description}
        onChange={onChange}
      />
      <strong>Task Status :</strong>{' '}
      <input
        type='radio'
        name='type'
        value='incomplete'
        checked={type === 'incomplete'}
        onChange={onChange}
      />
      incomplete{' '}
      <input
        type='radio'
        name='type'
        value='completed'
        checked={type === 'completed'}
        onChange={onChange}
      />
      completed
      <div>
        <input
          type='submit'
          value='Add Task'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default TodolistForm;
