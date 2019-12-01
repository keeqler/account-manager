import Account from '@/app/models/Account';

class AccountController {
  async store(req, res) {
    const { label, service, username, password, twofa_secret } = req.body;
    const { dataValues: account } = await Account.create({
      user_id: req.userId,
      label,
      service,
      username,
      password,
      twofa_secret,
    });

    return res.status(201).send({
      ...account,
      user_id: undefined,
      UserId: undefined,
      password: undefined,
      twofa_secret: undefined,
      created_at: undefined,
      updated_at: undefined,
    });
  }

  async index(req, res) {
    const accounts = await Account.findAll({
      where: {
        user_id: req.userId,
      },
      order: [['updated_at', 'DESC']],
      limit: 10,
      offset: (req.query.page - 1) * 10,
      attributes: ['id', 'label', 'service', 'username', 'updated_at'],
    });

    res.send(accounts);
  }

  async show(req, res) {
    const account = await Account.findOne({
      where: { id: req.params.id, user_id: req.userId },
    });

    if (!account)
      return res.status(400).send({ error: 'Account does not exist.' });

    return res.send({ ...account, user_id: undefined });
  }

  async update(req, res) {
    const { label, service, username, password, twofa_secret } = req.body;
    const [updated] = await Account.update(
      { label, service, username, password, twofa_secret },
      { where: { id: req.params.id, user_id: req.userId } }
    );

    if (!updated)
      return res.status(400).send({ error: 'Account does not exist.' });

    return res.sendStatus(204);
  }

  async delete(req, res) {
    const deleted = await Account.destroy({
      where: { id: req.params.id, user_id: req.userId },
    });

    if (!deleted)
      return res.status(400).send({ error: 'Account does not exist.' });

    return res.sendStatus(204);
  }
}

export default new AccountController();
