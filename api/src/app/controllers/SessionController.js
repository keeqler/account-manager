import jwt from 'jsonwebtoken';

import User from '@/app/models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password)))
      return res.status(400).send({
        error: {
          code: 'invalidData',
          msg: 'Wrong e-mail address or password.',
        },
      });

    return res.status(201).send({
      token: jwt.sign(
        { id: user.id, createdAt: new Date().getTime() },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRY,
        }
      ),
    });
  }
}

export default new SessionController();
