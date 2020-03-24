import { body, param, query } from 'express-validator';

export default {
  store: [
    body(['label', 'twofa_secret'])
      .optional()
      .notEmpty()
      .withMessage('Value must be provided.')
      .isString()
      .withMessage('Value type must be string.'),
    body(['service', 'username', 'password'])
      .notEmpty()
      .withMessage('Value must be provided.')
      .isString()
      .withMessage('Value type must be string.'),
    body('label').customSanitizer(value => (value ? value : '')),
    body('twofa_secret')
      .customSanitizer(value => (value ? value : ''))
      .custom(value => !value?.length || value?.length > 15)
      .withMessage('Length must be at least 16 characters long.'),
  ],

  index: [
    query('page')
      .isInt({ min: 1 })
      .withMessage('Value must be an integer greater than 0.'),
  ],

  show: [
    param('id')
      .isInt({ min: 1 })
      .withMessage('Value must be an integer greater than 0.'),
  ],

  update: [
    body(['label', 'service', 'username', 'password', 'twofa_secret'])
      .optional()
      .isString()
      .withMessage('Value type must be string.')
      .custom((value, { req }) => Object.keys(req.body).length)
      .withMessage('At least one value must be provided.'),
    body(['service', 'username', 'password'])
      .notEmpty()
      .withMessage('Value must not be empty'),
    body(['label']).customSanitizer(value => (value ? value : '')),
    body('twofa_secret')
      .customSanitizer(value => (value ? value : ''))
      .custom(value => !value?.length || value?.length > 15)
      .withMessage('Length must be at least 16 characters long.'),
  ],

  delete: [
    param('id')
      .isInt({ min: 1 })
      .withMessage('Value must be an integer greater than 0.'),
  ],
};
