import produce from 'immer';

const INITIAL_STATE = {
  message: { id: 0, text: null, isError: null },
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case '@form/SHOW_MESSAGE':
        draft.message.text = payload.message;
        draft.message.isError = payload.isError;
        draft.message.id = Math.random();
        break;

      case '@form/RESET_MESSAGE_ID':
        draft.message.id = 0;
        break;

      case '@form/SHOW_LOADING':
        draft.loading = true;
        break;

      case '@form/HIDE_LOADING':
        draft.loading = false;
        break;

      default:
    }
  });
};
