import { Router } from 'express';

import authMiddleware from '@middlewares/auth';

import UserController from '@controllers/UserController';
import SessionController from '@controllers/SessionController';

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
