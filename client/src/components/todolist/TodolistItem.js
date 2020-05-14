import React from 'react';
import PropTypes from 'prop-types';

const TodolistItem = ({ todolist }) => {
  const { id, taskname, description, type } = todolist;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {taskname}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' + (type === 'completed' ? 'badge-success' : 'badge-danger')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {description && (
          <li>
            <i className='fa fa-tasks' /> {description}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>edit</button>
        <button className='btn btn-danger btn-sm'>delete</button>
      </p>
    </div>
  );
};

TodolistItem.propTypes = {
  todolist: PropTypes.object.isRequired,
};
export default TodolistItem;
