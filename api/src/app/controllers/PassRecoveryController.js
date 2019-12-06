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

    const tokenValidation = await user.checkToken(token);

    user.password_recovery_token = null;
    user.password_recovery_expiry = null;

    switch (tokenValidation) {
      case 'TOKEN_NONEXISTENT':
        return res.status(400).send({
          error: 'Please request a password recovery token first.',
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

    return res.sendStatus(204);
  }
}

export default new PassRecoveryController();
