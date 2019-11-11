import { Router } from 'express';

import authMiddleware from '@/app/middlewares/auth';

import UserController from '@/app/controllers/UserController';
import SessionController from '@/app/controllers/SessionController';

const router = new Router();

// --- No auth routes
// /users
router.post('/users', UserController.store);

// /sessions
router.post('/sessions', SessionController.store);

// --- Auth routes
router.use(authMiddleware);

// /users
router.put('/users', UserController.update);

export default router;
