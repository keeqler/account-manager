import produce from 'immer';

const INITIAL_STATE = { token: null, displayName: null, loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });

    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        const { token, displayName } = action.payload;

        draft.token = token;
        draft.displayName = displayName;
        draft.loading = false;
      });

    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.token = null;
        draft.displayName = null;
      });

    default:
      return state;
  }
};
