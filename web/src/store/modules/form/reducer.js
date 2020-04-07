import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, { type }) => {
  return produce(state, draft => {
    switch (type) {
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
