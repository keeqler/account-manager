import React from 'react';

import PropTypes from 'prop-types';

import AuthHeader from '~/components/_headers/AuthHeader';

import Container from './styles';

export default function Auth({ children }) {
  return (
    <Container>
      <AuthHeader />
      {children}
    </Container>
  );
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};
