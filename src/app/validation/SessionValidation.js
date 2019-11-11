import * as Yup from 'yup';

import verifyValidation from '@/app/utils/verifyValidation';

export default {
  async validateStore(req, res, next) {
    req.schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    verifyValidation(req, res, next);
  },
};
