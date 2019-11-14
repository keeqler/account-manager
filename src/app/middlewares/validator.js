export default async (req, res, next) => {
  if (!(await req.schema.isValid(req.body)))
    return res.status(400).send({ error: 'Validation failed.' });

  return next();
};
