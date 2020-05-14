import React from 'react';
import PropType from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h2>
        <i className={icon} /> {title}
      </h2>
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
