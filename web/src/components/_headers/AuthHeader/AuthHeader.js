import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaSignOutAlt, FaCog } from 'react-icons/fa';

import Container from './AuthHeaderStyles';
import Logo from '~/components/Logo/Logo';

export default () => {
  const displayName = useSelector(state => state.auth.displayName);

  return (
    <Container>
      <Logo />
      <div className="desktop-rightside-container">
        <span className="welcome">
          Welcome back, <strong>{displayName}</strong>
        </span>
        <div className="button-container">
          <Link className="link" to="/settings">
            <FaCog size="100%" />
          </Link>
          <Link className="link" to="/">
            <FaSignOutAlt size="100%" />
          </Link>
        </div>
      </div>
    </Container>
  );
};
