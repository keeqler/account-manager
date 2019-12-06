import { body } from 'express-validator';

export default {
  store: [
    body(['email', 'password'])
      .notEmpty()
      .withMessage('Value must be provided.')
      .isString()
      .withMessage('Value type must be string.'),
    body('email')
      .isEmail()
      .withMessage('Value must be an e-mail address.'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Value must be at least 8 characters long.'),
  ],
};
