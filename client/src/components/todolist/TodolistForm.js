import React, { useState, useContext, useEffect } from 'react';
import TodolistContext from '../../context/todolist/todolistContext';

const ContactForm = () => {
  const todolistContext = useContext(TodolistContext);

  const [todolist, setTask] = useState({
    taskname: '',
    description: '',
    type: 'incompleted',
  });

  const { taskname, description, type } = todolist;

  const onChange = (e) =>
    setTask({ ...todolist, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    todolistContext.addTask(todolist);
    setTask({
      taskname: '',
      description: '',
      type: 'incompleted',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'></h2>
      <input
        type='text'
        placeholder='Name'
        name='taskname'
        value={taskname}
        onChange={onChange}
      />
      <textarea
        rows='8'
        placeholder='Email'
        name='description'
        value={description}
        onChange={onChange}
      />
      <h5 style={impStyle}>Task Status</h5>
      <input
        type='radio'
        name='type'
        value='completed'
        checked={type === 'completed'}
        onChange={onChange}
      />{' '}
      Completed{' '}
      <input
        type='radio'
        name='type'
        value='incompleted'
        checked={type === 'incompleted'}
        onChange={onChange}
      />{' '}
      Incompleted
      <div>
        <input type='submit' className='btn btn-primary btn-block' />
      </div>
      <div>
        <button className='btn btn-light btn-block'>Clear</button>
      </div>
    </form>
  );
};

const impStyle = {
  paddingTop: '30px',
};

export default ContactForm;
