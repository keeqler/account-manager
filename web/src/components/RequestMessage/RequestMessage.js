import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Container from './RequestMessageStyles';

export default function FormMessage({ className, message, show, isError }) {
  return (
    <Container className={className}>
      <CSSTransition classNames="message" in={show} timeout={300} unmountOnExit>
        <div className={`message${isError ? ' error' : ''}`}>{message}</div>
      </CSSTransition>
    </Container>
  );
}

FormMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
};

FormMessage.defaultProps = {
  className: '',
  isError: false,
};
