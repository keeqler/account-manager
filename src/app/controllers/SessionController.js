import jwt from 'jsonwebtoken';

import User from '@/app/models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user)
      return res
        .status(400)
        .send({ error: 'Wrong e-mail address or password.' });

    if (!(await user.checkPassword(password)))
      return res
        .status(400)
        .send({ error: 'Wrong e-mail address or password.' });

    return res.send({
      user: {
        id: user.id,
      },
      token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY,
      }),
    });
  }
}

export default new SessionController();
