import 'dotenv/config';
import 'module-alias/register';

import Queue from './lib/Queue';

Queue.processQueue();
