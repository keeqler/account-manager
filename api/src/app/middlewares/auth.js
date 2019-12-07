import { verify } from 'jsonwebtoken';
import { promisify } from 'util';

import RedisClient from '@/lib/RedisClient';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ error: 'Token not provided.' });

  try {
    const decoded = await promisify(verify)(
      authHeader.split(' ')[1],
      process.env.JWT_SECRET
    );
    const expiry = parseInt(
      await RedisClient.hgetAsync('jwtValidationTimestamp', decoded.id)
    );

    if (
      expiry &&
      new Date(decoded.createdAt).getTime() < new Date(expiry).getTime()
    )
      throw new Error();

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).send({ error: 'Invalid token.' });
  }
};
