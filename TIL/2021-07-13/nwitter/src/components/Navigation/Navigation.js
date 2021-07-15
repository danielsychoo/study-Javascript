import React from 'react';
import { Link } from 'react-router-dom';
import { Signout } from 'components';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/myProfile">Profile</Link>
      </li>
      <li>
        <Signout />
      </li>
    </ul>
  );
};

export default Navigation;
