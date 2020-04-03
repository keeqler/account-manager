import produce from 'immer';

const INITIAL_STATE = { token: null, displayName: null };

export default (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        draft.token = action.payload.token;
        draft.email = action.payload.email;
        draft.displayName = action.payload.displayName;
        break;

      case '@auth/SIGN_OUT':
        draft.token = null;
        draft.displayName = null;
        break;

      default:
    }
  });
};
