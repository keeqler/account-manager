import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => res.send({ msg: 'Hello, world!' }));

export default router;
