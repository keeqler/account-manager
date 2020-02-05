import { useState } from 'react';

export default () => {
  const [requestMessage, setRequestMessage] = useState({
    message: null,
    isError: false,
    show: false,
  });

  async function _setRequestMessage(message, isError = false) {
    setRequestMessage({ ...requestMessage, show: false });

    if (!message) return;

    setTimeout(() => {
      setRequestMessage({ message, isError, show: true });
    }, 300);
  }

  return [requestMessage, _setRequestMessage];
};
