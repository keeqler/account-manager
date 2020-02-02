import React from 'react';
import PropTypes from 'prop-types';

import Container from './NoAuthStyles';
import NoAuthHeader from '~/components/NoAuthHeader/NoAuthHeader';

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
