import { createClient } from 'redis';
import { promisifyAll } from 'bluebird';

export default promisifyAll(createClient(6379, process.env.REDIS_HOST));
