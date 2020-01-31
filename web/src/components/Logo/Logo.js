import React from 'react';

import Logo from '~/assets/logo.png';

import Container from './LogoStyles';

export default () => (
  <Container>
    <img src={Logo} alt="Account Manager" />
    <div>
      <strong>Account</strong>
      <span>manager</span>
    </div>
  </Container>
);
