import * as Yup from 'yup';

import verifyValidation from '@/app/utils/verifyValidation';

export default {
  async validateStore(req, res, next) {
    req.schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(8)
        .required(),
    });

    verifyValidation(req, res, next);
  },

  async validateUpdate(req, res, next) {
    req.schema = Yup.object().shape({
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

    verifyValidation(req, res, next);
  },
};
