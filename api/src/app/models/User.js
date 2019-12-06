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
        modelName: 'User',
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Account, {
      as: 'accounts',
      onDelete: 'CASCADE',
      foreignKey: 'user_id',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }

  checkToken(token) {
    if (!this.password_recovery_token) return 'nonexistentToken';

    const expiry = new Date(this.password_recovery_expiry);

    if (expiry.getTime() < new Date().getTime()) return 'expiredToken';
    if (!bcrypt.compare(token, this.password_recovery_token))
      return 'invalidToken';

    return 'validToken';
  }
}
