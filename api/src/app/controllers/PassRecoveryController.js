import bcrypt from 'bcrypt';
import crypto from 'crypto';

import User from '@/app/models/User';

import Queue from '@/lib/Queue';
import PassRecoveryMail from '@/app/jobs/PassRecoveryMail';

class PassRecoveryController {
  async store(req, res) {
    const user = await User.findOne({ where: { email: req.params.email } });

    if (!user) return res.sendStatus(204);

    const token = crypto
      .randomBytes(6)
      .toString('hex')
      .toUpperCase();
    const hash = await bcrypt.hash(token, 10);

    await Queue.add(PassRecoveryMail.key, { email: user.email, token });

    user.password_recovery_token = hash;
    user.password_recovery_expiry = new Date(
      new Date().setMinutes(new Date().getMinutes() + 5)
    ).toJSON();

    await user.save();

    return res.sendStatus(204);
  }

  async update(req, res) {
    const { token, password } = req.body;
    const user = await User.findOne({ where: { email: req.params.email } });

    if (!user) return res.sendStatus(204);

    const tokenValidationResult = await user.checkToken(token);

    user.password_recovery_token = null;
    user.password_recovery_expiry = null;

    if (tokenValidationResult !== 'validToken') {
      let msg;

      // eslint-disable-next-line default-case
      switch (tokenValidationResult) {
        case 'nonexistentToken':
          msg = 'Please request a password recovery token first.';
          break;
        case 'invalidToken':
          msg = 'Invalid token.';
          break;
        case 'expiredToken':
          msg = 'Expired token.';
          break;
      }

      return res.status(400).send({
        error: {
          code: tokenValidationResult,
          msg,
        },
      });
    }

    user.password = await bcrypt.hash(password, 10);

    await user.save();

    return res.sendStatus(204);
  }
}

export default new PassRecoveryController();
