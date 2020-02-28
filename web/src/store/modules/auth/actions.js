export const signUpRequest = (email, password) => ({
  type: '@auth/SIGN_UP_REQUEST',
  payload: { email, password },
});

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

export const forgotPassword = email => ({
  type: '@auth/FORGOT_PASSWORD',
  payload: { email },
});

export const passwordReset = (code, email, password) => ({
  type: '@auth/PASSWORD_RESET',
  payload: { code, email, password },
});
