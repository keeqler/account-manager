import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';
import { store, persistor } from './store';
import history from '~/services/history';

import GlobalStylesheet from '~/components/GlobalStylesheet';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <GlobalStylesheet />
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);
