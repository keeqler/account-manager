export const showMessage = (message, isError) => ({
  type: '@form/SHOW_MESSAGE',
  payload: { message, isError },
});

export const showLoading = () => ({
  type: '@form/SHOW_LOADING',
});

export const hideLoading = () => ({
  type: '@form/HIDE_LOADING',
});
