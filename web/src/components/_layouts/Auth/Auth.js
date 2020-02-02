import React from 'react';
import PropTypes from 'prop-types';

import Container from './AuthStyles';
import AuthHeader from '~/components/AuthHeader/AuthHeader';

export default function Auth({ children }) {
  return (
    <Container>
      <AuthHeader />
      <main>{children}</main>
    </Container>
  );
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};
