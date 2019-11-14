import * as Yup from 'yup';

export default {
  async validateStore(req, res, next) {
    req.bodySchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(8)
        .required(),
    });

    next();
  },

  async validateUpdate(req, res, next) {
    req.bodySchema = Yup.object().shape({
      password: Yup.string()
        .min(8)
        .required(),
      newEmail: Yup.string()
        .email()
        .when('newPassword', (newPassword, field) =>
          newPassword ? field : field.required()
        ),
      newPassword: Yup.string().min(8),
    });

    next();
  },
};
