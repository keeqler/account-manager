import { Router } from 'express';

import UserController from '@controllers/UserController';
import SessionController from '@controllers/SessionController';

const router = new Router();

// /users
router.post('/users', UserController.store);

// /sessions
router.post('/sessions', SessionController.store);

export default router;
