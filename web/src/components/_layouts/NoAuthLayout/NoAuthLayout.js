import React from 'react';
import PropTypes from 'prop-types';

import Container from './NoAuthLayoutStyles';
import NoAuthHeader from '~/components/_headers/NoAuthHeader/NoAuthHeader';

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
