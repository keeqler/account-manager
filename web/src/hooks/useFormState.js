import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';

import useRequestMessage from './useRequestMessage';

export default () => {
  const store = useStore();
  const [prevState, setPrevState] = useState({
    loading: false,
    message: { id: 0 },
  });
  const [loading, setLoading] = useState(false);
  const [requestMessage, setRequestMessage] = useRequestMessage();

  useEffect(() =>
    store.subscribe(() => {
      const { form } = store.getState();

      if (prevState.loading !== form.loading) setLoading(form.loading);
      if (prevState.message.id !== form.message.id) {
        setRequestMessage(
          form.message.id,
          form.message.text,
          form.message.isError,
        );
      }

      setPrevState(form);
    }),
  );

  useEffect(() => () => store.dispatch({ type: '@form/RESET_MESSAGE_ID' }), [
    store,
  ]);

  return { loading, requestMessage };
};
