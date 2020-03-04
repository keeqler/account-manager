import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { store } from '~/store';

import AuthLayout from '~/components/_layouts/AuthLayout';
import NoAuthLayout from '~/components/_layouts/NoAuthLayout';

export default function RouteWrapper({
  component: Component,
  path,
  exact,
  isPrivate,
}) {
  const signed = store.getState().auth.token !== null;

  if (!signed && isPrivate) return <Redirect to="/" />;
  if (signed && !isPrivate) return <Redirect to="/dashboard" />;

  const Layout = signed ? AuthLayout : NoAuthLayout;

  return (
    <Route
      path={path}
      exact={exact}
      render={({ history, location, match }) => (
        <Layout>
          <Component history={history} location={location} match={match} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  exact: false,
  isPrivate: false,
};
