import { useState } from 'react';

export default () => {
  const [message, setMessage] = useState({
    id: 0,
    text: '',
    show: false,
    isError: false,
    timeoutId: null,
  });

  function _setMessage(id, text, isError = false) {
    clearTimeout(message.timeoutId);

    if (message.show) setMessage({ ...message, show: false });

    const timeoutId = setTimeout(
      () => setMessage({ ...message, id, show: false, text, isError }),
      3000,
    );

    setMessage({ id, text, show: true, isError, timeoutId });
  }

  return [message, _setMessage];
};
