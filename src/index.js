import 'dotenv/config';
import 'module-alias/register';

import app from '@src/app';

app.listen(process.env.SERVER_PORT);
