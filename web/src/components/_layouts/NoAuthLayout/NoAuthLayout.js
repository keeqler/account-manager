import React from 'react';

import PropTypes from 'prop-types';

import NoAuthHeader from '~/components/_headers/NoAuthHeader/NoAuthHeader';

import Container from './NoAuthLayoutStyles';

export default function NoAuth({ children }) {
  return (
    <Container>
      <NoAuthHeader />
      <main>{children}</main>
    </Container>
  );
}

NoAuth.propTypes = {
  children: PropTypes.element.isRequired,
};
