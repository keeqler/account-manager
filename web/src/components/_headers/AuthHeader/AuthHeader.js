import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Assets
import { FaSignOutAlt, FaCog } from 'react-icons/fa';

// Components
import Container from './AuthHeaderStyles';
import Logo from '~/components/Logo/Logo';

function AuthHeader({ displayName }) {
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
}

AuthHeader.propTypes = {
  displayName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  displayName: state.auth.displayName,
});

export default connect(mapStateToProps)(AuthHeader);
