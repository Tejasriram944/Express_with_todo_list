import React from 'react';
import Todolists from '../todolist/Todolists';
import TodolistForm from '../todolist/TodolistForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <TodolistForm />
      </div>
      <div>
        <Todolists />
      </div>
    </div>
  );
};

export default Home;
