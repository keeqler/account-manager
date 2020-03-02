import React from 'react';
import { Switch, Route as StdRoute } from 'react-router-dom';

import Route from '~/components/Route';

// Non-authenticated pages
import Dashboard from '~/pages/Dashboard/Dashboard';
import ForgotPassword from '~/pages/ForgotPassword/ForgotPassword';
import Login from '~/pages/Login/Login';
import NotFound from '~/pages/NotFound/NotFound';
import PasswordReset from '~/pages/PasswordReset/PasswordReset';
import Register from '~/pages/Register/Register';

// Authenticated pages

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/passwordreset/:email" component={PasswordReset} />

    <Route path="/dashboard" component={Dashboard} isPrivate />

    <StdRoute path="/" component={NotFound} />
  </Switch>
);
