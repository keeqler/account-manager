import Sequelize, { Model } from 'sequelize';

export default class extends Model {
  static init(connection) {
    super.init(
      {
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        connection,
      }
    );
  }
}
