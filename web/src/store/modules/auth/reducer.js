import produce from 'immer';

const INITIAL_STATE = { token: null, displayName: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        const { token, displayName } = action.payload;

        draft.token = token;
        draft.displayName = displayName;
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
