import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

export default class extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        password_recovery_token: Sequelize.STRING,
        password_recovery_expiry: Sequelize.DATE,
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

  checkToken(token) {
    if (!this.password_recovery_token) return 'TOKEN_NONEXISTENT';

    const expiry = new Date(this.password_recovery_expiry);

    if (expiry.getTime() < new Date().getTime()) return 'TOKEN_EXPIRED';
    if (!bcrypt.compare(token, this.password_recovery_token))
      return 'TOKEN_INVALID';

    return 'TOKEN_VALID';
  }
}
