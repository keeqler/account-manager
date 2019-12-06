import { body, param } from 'express-validator';

export default {
  store: [
    param('email')
      .isString()
      .withMessage('Value type must be string.')
      .isEmail()
      .withMessage('Value must be an e-mail address.'),
  ],

  update: [
    param('email')
      .isString()
      .withMessage('Value type must be string.')
      .isEmail()
      .withMessage('Value must be an e-mail address.'),

    body(['token', 'password'])
      .notEmpty()
      .withMessage('Value must be provided.')
      .isString()
      .withMessage('Value type must be string.'),
    body('token')
      .isLength({ min: 12, max: 12 })
      .withMessage('Value must be 12 characters long.'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Value must be at least 8 characters long.'),
  ],
};
