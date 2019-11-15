import Sequelize from 'sequelize';

import User from '@/app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize({
      dialect: 'postgres',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      },
    });

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
