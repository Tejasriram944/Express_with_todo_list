import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h2>
        <i className={icon} /> {title}
      </h2>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
          <Link to='/register'>register</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propType = {
  title: PropType.string.isRequired,
  icon: PropType.string,
};

Navbar.defaultProps = {
  title: 'ToDo-List',
  icon: 'fas fa-id-card-alt',
};
export default Navbar;
