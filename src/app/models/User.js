import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

export default class extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        modelName: 'user',
        sequelize,
      }
    );
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}
