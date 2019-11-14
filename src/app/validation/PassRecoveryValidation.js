import * as Yup from 'yup';

export default {
  async validateStore(req, res, next) {
    req.paramsSchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    next();
  },

  async validateUpdate(req, res, next) {
    req.paramsSchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    req.bodySchema = Yup.object().shape({
      token: Yup.string()
        .length(12)
        .required(),
      password: Yup.string()
        .min(8)
        .required(),
    });

    next();
  },
};
