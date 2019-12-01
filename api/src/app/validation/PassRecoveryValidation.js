import * as Yup from 'yup';

export default {
  store: {
    params: Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    }),
  },

  update: {
    params: Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    }),

    body: Yup.object().shape({
      token: Yup.string()
        .length(12)
        .required(),
      password: Yup.string()
        .min(8)
        .required(),
    }),
  },
};
