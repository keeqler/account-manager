import { Router } from 'express';

import UserController from '@controllers/UserController';

const router = new Router();

router.post('/users', UserController.store);

export default router;
