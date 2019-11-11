import bcrypt from 'bcrypt';

import User from '@/app/models/User';

class UserController {
  async store(req, res) {
    const emailTaken = await User.findOne({ where: { email: req.body.email } });

    if (emailTaken)
      return res.status(400).json({ error: 'E-mail already taken.' });

    const user = await User.create({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    });

    return res.status(201).send({ ...user.dataValues, password: undefined });
  }

  async update(req, res) {
    const { password, email, newPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (!(await user.checkPassword(password)))
      return res.status(400).send({ error: 'Password does not match.' });

    if (email && email !== user.email) {
      const emailTaken = await User.findOne({
        where: { email },
      });

      if (emailTaken)
        return res.status(400).send({ error: 'E-mail already taken.' });

      user.email = email;
    }
    if (newPassword) user.password = await bcrypt.hash(newPassword, 10);

    await user.save();

    return res.send({ ...user.dataValues, password: undefined });
  }
}

export default new UserController();
