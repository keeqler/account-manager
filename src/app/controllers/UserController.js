import bcrypt from 'bcrypt';

import User from '@models/User';

class UserController {
  async store(req, res) {
    const emailTaken = await User.findOne({ where: { email: req.body.email } });

    if (emailTaken)
      return res.status(400).json({ error: 'E-mail already taken.' });

    const user = await User.create({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    });

    return res.status(201).send({ email: user.dataValues.email });
  }
}

export default new UserController();
