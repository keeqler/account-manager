import Sequelize, { Model } from 'sequelize';

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
}
