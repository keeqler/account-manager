import React from 'react';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';
import { signOut } from '~/store/modules/auth/actions';

import Logo from '~/components/Logo';

import Container from './styles';

export default () => {
  const dispatch = useDispatch();
  const displayName = useSelector(state => state.auth.displayName);

  return (
    <Container>
      <Logo />
      <div className="desktop-rightside-container">
        <span className="welcome">
          Welcome back, <strong>{displayName}</strong>
        </span>
        <div className="button-container">
          <button type="button" onClick={() => history.push('/settings')}>
            <FaCog size="100%" />
          </button>
          <button type="button" onClick={() => dispatch(signOut())}>
            <FaSignOutAlt size="100%" />
          </button>
        </div>
      </div>
    </Container>
  );
};
