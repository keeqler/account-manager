import { Router } from 'express';

import authMiddleware from '@/app/middlewares/auth';

import validation from '@/app/middlewares/validation';

import UserValidation from '@/app/validation/UserValidation';
import SessionValidation from '@/app/validation/SessionValidation';
import PassRecoveryValidation from '@/app/validation/PassRecoveryValidation';
import AccountValidation from '@/app/validation/AccountValidation';

import UserController from '@/app/controllers/UserController';
import SessionController from '@/app/controllers/SessionController';
import PassRecoveryController from '@/app/controllers/PassRecoveryController';
import AccountController from '@/app/controllers/AccountController';

const router = new Router();

// --- No auth routes
// /users
router.post('/users', UserValidation.store, validation, UserController.store);

// /sessions
router.post(
  '/sessions',
  SessionValidation.store,
  validation,
  SessionController.store
);

// /password_recovery
router.post(
  '/password_recovery/:email',
  PassRecoveryValidation.store,
  validation,
  PassRecoveryController.store
);
router.put(
  '/password_recovery/:email',
  PassRecoveryValidation.update,
  validation,
  PassRecoveryController.update
);

// --- Auth routes
router.use(authMiddleware);

// /users
router.put('/users', UserValidation.update, validation, UserController.update);

// /accounts
router.post(
  '/accounts',
  AccountValidation.store,
  validation,
  AccountController.store
);
router.get(
  '/accounts',
  AccountValidation.index,
  validation,
  AccountController.index
);
router.get(
  '/accounts/:id',
  AccountValidation.show,
  validation,
  AccountController.show
);
router.put(
  '/accounts/:id',
  AccountValidation.update,
  validation,
  AccountController.update
);
router.delete(
  '/accounts/:id',
  AccountValidation.delete,
  validation,
  AccountController.delete
);

export default router;
