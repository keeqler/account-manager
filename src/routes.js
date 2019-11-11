import { Router } from 'express';

import authMiddleware from '@/app/middlewares/auth';

import UserValidation from '@/app/validation/UserValidation';
import SessionValidation from '@/app/validation/SessionValidation';

import UserController from '@/app/controllers/UserController';
import SessionController from '@/app/controllers/SessionController';

const router = new Router();

// --- No auth routes
// /users
router.post('/users', UserValidation.validateStore, UserController.store);

// /sessions
router.post(
  '/sessions',
  SessionValidation.validateStore,
  SessionController.store
);

// --- Auth routes
router.use(authMiddleware);

// /users
router.put('/users', UserValidation.validateUpdate, UserController.update);

export default router;
