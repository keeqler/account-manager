import { Router } from 'express';

import authMiddleware from '@/app/middlewares/auth';

import validate from '@/lib/validateRequest';

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
router.post('/users', validate(UserValidation.store), UserController.store);

// /sessions
router.post(
  '/sessions',
  validate(SessionValidation.store),
  SessionController.store
);

// /password_recovery
router.post(
  '/password_recovery/:email',
  validate(PassRecoveryValidation.store),
  PassRecoveryController.store
);
router.put(
  '/password_recovery/:email',
  validate(PassRecoveryValidation.update),
  PassRecoveryController.update
);

// --- Auth routes
router.use(authMiddleware);

// /users
router.put('/users', validate(UserValidation.update), UserController.update);

// /accounts
router.post(
  '/accounts',
  validate(AccountValidation.store),
  AccountController.store
);
router.get(
  '/accounts',
  validate(AccountValidation.index),
  AccountController.index
);
router.get('/accounts/:id', AccountController.show);
router.put('/accounts/:id', AccountController.update);
router.delete(
  '/accounts/:id',
  validate(AccountValidation.update),
  AccountController.delete
);

export default router;
