export const showMessage = (message, isError) => ({
  type: '@form/SHOW_MESSAGE',
  payload: { message, isError },
});

export const resetMessageId = () => ({
  type: '@form/RESET_MESSAGE_ID',
});

export const showLoading = () => ({
  type: '@form/SHOW_LOADING',
});

export const hideLoading = () => ({
  type: '@form/HIDE_LOADING',
});
