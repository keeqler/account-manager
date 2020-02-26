import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Container from './RequestMessageStyles';

export default function RequestMessage({ className, state }) {
  const { show, text, isError } = state;

  return (
    <Container className={className} isError={isError}>
      <CSSTransition classNames="message" in={show} timeout={280} unmountOnExit>
        <span className="message">{text}</span>
      </CSSTransition>
    </Container>
  );
}

RequestMessage.propTypes = {
  className: PropTypes.string,
  state: PropTypes.shape({
    show: PropTypes.bool,
    text: PropTypes.string,
    isError: PropTypes.bool,
  }).isRequired,
};

RequestMessage.defaultProps = {
  className: '',
};
