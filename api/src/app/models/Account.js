import Sequelize, { Model } from 'sequelize';
import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.CRYPTO_KEY);

// I didn't find a better name for this, sorry :(
function encryptOrDecryptAccountData(action) {
  return account => {
    if (!account) return;
    if (account.attributes) account = account.attributes;

    ['password', 'twofa_secret'].forEach(key => {
      if (account[key]) account[key] = cryptr[action](account[key]);
    });
  };
}

export default class extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING,
        service: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        twofa_secret: Sequelize.STRING,
      },
      {
        modelName: 'Account',
        sequelize,
      }
    );

    this.addHook('beforeCreate', encryptOrDecryptAccountData('encrypt'));
    this.addHook('beforeBulkUpdate', encryptOrDecryptAccountData('encrypt'));
    this.addHook('afterFind', encryptOrDecryptAccountData('decrypt'));
  }

  static associate(models) {
    this.belongsTo(models.User);
  }
}
