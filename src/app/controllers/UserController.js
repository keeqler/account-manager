import bcrypt from 'bcrypt';

import User from '@/app/models/User';

class UserController {
  async store(req, res) {
    const { email, password } = req.body;
    const emailTaken = await User.findOne({ where: { email } });

    if (emailTaken)
      return res.status(400).json({ error: 'E-mail already taken.' });

    const { dataValues: user } = await User.create({
      email,
      password: await bcrypt.hash(password, 10),
    });

    return res.status(201).send({
      ...user,
      password: undefined,
      password_recovery_token: undefined,
      password_recovery_expiry: undefined,
    });
  }

  async update(req, res) {
    const { password, newEmail, newPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (!(await user.checkPassword(password)))
      return res.status(400).send({ error: 'Password does not match.' });

    if (newEmail && newEmail !== user.email) {
      const emailTaken = await User.findOne({
        where: { email: newEmail },
      });

      if (emailTaken)
        return res.status(400).send({ error: 'E-mail already taken.' });

      user.email = newEmail;
    }
    if (newPassword) user.password = await bcrypt.hash(newPassword, 10);

    await user.save();

    return res.sendStatus(204);
  }
}

export default new UserController();
