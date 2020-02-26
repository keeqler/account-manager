import { useState } from 'react';

export default () => {
  const [requestMessage, setRequestMessage] = useState({
    id: 0,
    text: '',
    show: false,
    isError: false,
    timeoutId: null,
  });

  function _setRequestMessage(id, text, isError = false) {
    if (requestMessage.timeoutId) clearTimeout(requestMessage.timeoutId);

    setRequestMessage({ ...requestMessage, show: false });

    const timeoutId = setTimeout(
      () =>
        setRequestMessage({ ...requestMessage, show: false, text, isError }),
      3000,
    );

    setRequestMessage({
      ...requestMessage,
      id,
      text,
      show: true,
      isError,
      timeoutId,
    });

    // console.tron.log(requestMessage);
  }

  return [requestMessage, _setRequestMessage];
};
