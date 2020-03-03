import React from 'react';
import { Switch, Route as StdRoute } from 'react-router-dom';

import Route from '~/components/Route';
import Dashboard from '~/pages/Dashboard';
import ForgotPassword from '~/pages/ForgotPassword';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import PasswordReset from '~/pages/PasswordReset';
import Register from '~/pages/Register';

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
