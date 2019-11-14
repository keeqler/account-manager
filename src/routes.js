import { Router } from 'express';

import authMiddleware from '@/app/middlewares/auth';
import validatorMiddleware from '@/app/middlewares/validator';

import UserValidation from '@/app/validation/UserValidation';
import SessionValidation from '@/app/validation/SessionValidation';

import UserController from '@/app/controllers/UserController';
import SessionController from '@/app/controllers/SessionController';
import PassRecoveryController from '@/app/controllers/PassRecoveryController';
import PassRecoveryValidation from './app/validation/PassRecoveryValidation';

const router = new Router();

// --- No auth routes
// /users
router.post(
  '/users',
  UserValidation.validateStore,
  validatorMiddleware,
  UserController.store
);

// /sessions
router.post(
  '/sessions',
  SessionValidation.validateStore,
  validatorMiddleware,
  SessionController.store
);

// /password_recovery
router.post(
  '/password_recovery/:email',
  PassRecoveryValidation.validateStore,
  validatorMiddleware,
  PassRecoveryController.store
);
router.put(
  '/password_recovery/:email',
  PassRecoveryValidation.validateUpdate,
  validatorMiddleware,
  PassRecoveryController.update
);

// --- Auth routes
router.use(authMiddleware);

// /users
router.put(
  '/users',
  UserValidation.validateUpdate,
  validatorMiddleware,
  UserController.update
);

export default router;
