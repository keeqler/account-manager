import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';

import PropTypes from 'prop-types';

import { FormContext } from '~/Contexts';

import useRequestMessage from './hooks/useRequestMessage';

import Container from './styles';

export default function Form({ children, schema, initialData, onSubmit }) {
  const store = useStore();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useRequestMessage();

  useEffect(() =>
    store.subscribe(() => {
      const { form } = store.getState();

      if (loading !== form.loading) setLoading(form.loading);
      if (message.id !== form.message.id)
        setMessage(form.message.id, form.message.text, form.message.isError);
    }),
  );

  useEffect(
    () => () => {
      clearTimeout(message.timeoutId);

      store.dispatch({ type: '@form/RESET_MESSAGE_ID' });
    },
    [store, message.timeoutId],
  );

  return (
    <Container schema={schema} initialData={initialData} onSubmit={onSubmit}>
      <FormContext.Provider value={{ loading, requestMessage: message }}>
        {children}
      </FormContext.Provider>
    </Container>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object.isRequired,
  initialData: PropTypes.objectOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  initialData: {},
};
