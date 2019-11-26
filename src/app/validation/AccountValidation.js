import * as Yup from 'yup';

export default {
  store: {
    body: Yup.object().shape({
      label: Yup.string(),
      service: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string().required(),
      twofa_secret: Yup.string().min(16),
    }),
  },

  index: {
    query: Yup.object().shape({ page: Yup.number().min(1) }),
  },

  update: {
    body: Yup.object().shape({
      label: Yup.string(),
      service: Yup.string(),
      username: Yup.string(),
      password: Yup.string(),
      twofa_secret: Yup.string().min(16),
    }),
  },
};
