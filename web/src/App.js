import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStylesheet from '~/components/GlobalStylesheet';
import history from '~/services/history';

import Routes from './Routes';
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
