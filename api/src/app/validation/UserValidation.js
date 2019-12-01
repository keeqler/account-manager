import * as Yup from 'yup';

export default {
  store: {
    body: Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(8)
        .required(),
    }),
  },

  update: {
    body: Yup.object().shape({
      password: Yup.string()
        .min(8)
        .required(),
      newEmail: Yup.string()
        .email()
        .when('newPassword', (newPassword, field) =>
          newPassword ? field : field.required()
        ),
      newPassword: Yup.string().min(8),
    }),
  },
};
