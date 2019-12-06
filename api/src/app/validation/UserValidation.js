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

  update: [
    body('password')
      .notEmpty()
      .withMessage('Value must be provided.')
      .isString()
      .withMessage('Value type must be string.')
      .isLength({ min: 8 })
      .withMessage('Length must be at least 8 characters long.'),
    body('newPassword')
      .optional()
      .isLength({ min: 8 })
      .withMessage('Length must be at least 8 characters long.'),
    body('newEmail')
      .optional()
      .isEmail()
      .withMessage('Value must be an e-mail address.'),
    body(['newPassword', 'newEmail'])
      .optional()
      .isString()
      .withMessage('Value type must be string.'),
    body(['newPassword', 'newEmail'])
      .custom((value, { req }) => req.body.newPassword || req.body.newEmail)
      .withMessage('Either newPassword or newEmail must be provided.'),
  ],
};
