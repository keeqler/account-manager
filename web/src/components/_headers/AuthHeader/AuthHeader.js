import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import { FaSignOutAlt, FaCog } from 'react-icons/fa';

// Components
import Container from './AuthHeaderStyles';
import Logo from '~/components/Logo/Logo';

export default () => (
  <Container>
    <Logo />
    <div className="desktop-rightside-container">
      <span className="welcome">
        Welcome back, <strong>john777</strong>
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
