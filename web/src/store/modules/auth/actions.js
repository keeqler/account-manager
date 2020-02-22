export const signInRequest = (email, password) => ({
  type: '@auth/SIGN_IN_REQUEST',
  payload: { email, password },
});

export const signInSuccess = (token, displayName) => ({
  type: '@auth/SIGN_IN_SUCCESS',
  payload: { token, displayName },
});

export const signOut = () => ({
  type: '@auth/SIGN_OUT',
});
