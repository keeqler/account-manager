import { createClient } from 'redis';
import { promisifyAll } from 'bluebird';

export default promisifyAll(createClient());
