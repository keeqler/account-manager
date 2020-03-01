import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';

import { FormContext } from '~/Contexts';

import Container from './FormRequestMessageStyles';

export default function RequestMessage() {
  const {
    requestMessage: { text, show, isError },
  } = useContext(FormContext);

  return (
    <Container isError={isError}>
      <CSSTransition classNames="message" in={show} timeout={280} unmountOnExit>
        <span className="message">{text}</span>
      </CSSTransition>
    </Container>
  );
}
