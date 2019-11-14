import * as Yup from 'yup';

export default {
  async validateStore(req, res, next) {
    req.bodySchema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    next();
  },
};
