import 'dotenv/config';
import 'module-alias/register';

import app from '@/app';

app.listen(process.env.SERVER_PORT);
