import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStylesheet from '~/components/GlobalStylesheet';
import Routes from './Routes';

import history from '~/services/history';

import { store, persistor } from './store';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <GlobalStylesheet />
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);
