import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import 'express-async-errors';

import routes from '@/routes';

import '@/database/';

class App {
  constructor() {
    this.server = express();

    if (process.env.NODE_ENV === 'production')
      Sentry.init({ dsn: process.env.SENTRY_DSN });

    this.middlewares();
    this.routes();

    if (process.env.NODE_ENV === 'production') this.exceptionHandlers();
  }

  middlewares() {
    this.server.use(morgan('dev'));
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandlers() {
    this.server.use(Sentry.Handlers.errorHandler());
    this.server.use(async (err, req, res, next) => res.status(500).send());
  }
}

export default new App().server;
