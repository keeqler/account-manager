import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStylesheet from '~/components/GlobalStylesheet';
import Routes from './Routes';

import history from '~/services/history';

export default () => (
  <Router history={history}>
    <GlobalStylesheet />
    <Routes />
  </Router>
);
