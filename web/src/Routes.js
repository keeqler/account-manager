import React from 'react';
import { Switch, Route as StdRoute } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import ForgotPassword from '~/pages/ForgotPassword';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import PasswordReset from '~/pages/PasswordReset';
import Register from '~/pages/Register';
import Settings from '~/pages/Settings';

import Route from '~/components/Route';

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/passwordreset/:email" component={PasswordReset} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/settings" component={Settings} isPrivate />

    <StdRoute path="/" component={NotFound} />
  </Switch>
);
