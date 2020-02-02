import React from 'react';
import { Switch, Route as StdRoute } from 'react-router-dom';

import Route from '~/components/Route';

// Non-authenticated pages
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import ForgotPassword from '~/pages/ForgotPassword/ForgotPassword';
import NotFound from '~/pages/NotFound/NotFound';

// Authenticated pages
import Dashboard from '~/pages/Dashboard/Dashboard';

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />

    <StdRoute path="/" component={NotFound} />
  </Switch>
);
