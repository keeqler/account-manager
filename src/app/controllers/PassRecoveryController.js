import bcrypt from 'bcrypt';
import crypto from 'crypto';

import User from '@/app/models/User';

import Mailer from '@/lib/Mailer';

class PassRecoveryController {
  async store(req, res) {
    const user = await User.findOne({ where: { email: req.params.email } });

    if (!user) return res.send();

    const token = crypto
      .randomBytes(6)
      .toString('hex')
      .toUpperCase();
    const hash = await bcrypt.hash(token, 10);

    await Mailer.sendMail({
      to: `${user.email.split('@')[0]} <${user.email}>`,
      subject: 'Account Manager password recovery token',
      text: token,
    });

    user.password_recovery_token = hash;
    user.password_recovery_expiry = new Date(
      new Date().setMinutes(new Date().getMinutes() + 5)
    ).toJSON();

    await user.save();

    return res.send();
  }

  async update(req, res) {
    const { token, password } = req.body;
    const user = await User.findOne({ where: { email: req.params.email } });

    const tokenValidation = await user.checkToken(token);

    user.password_recovery_token = null;
    user.password_recovery_expiry = null;

    switch (tokenValidation) {
      case 'TOKEN_NONEXISTENT':
        return res.status(400).send({
          error:
            'Token does not exist, please request a password recovery token first.',
        });

      case 'TOKEN_INVALID':
        return res.status(400).send({ error: 'Invalid token.' });

      case 'TOKEN_EXPIRED':
        await user.save();
        return res.status(400).send({ error: 'Expired token.' });

      default: // do nothing
    }

    user.password = await bcrypt.hash(password, 10);

    await user.save();

    return res.send();
  }
}

export default new PassRecoveryController();
