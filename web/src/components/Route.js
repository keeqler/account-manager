import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  path,
  exact,
  isPrivate,
}) {
  // this will be static for now
  const signed = false;

  if (!signed && isPrivate) return <Redirect to="/" />;
  if (signed && !isPrivate) return <Redirect to="/dashboard" />;

  return <Route path={path} exact={exact} component={Component} />;
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
