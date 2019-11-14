export default async (req, res, next) => {
  if (req.bodySchema)
    if (!(await req.bodySchema.isValid(req.body)))
      return res.status(400).send({ error: 'Validation failed.' });
  if (req.paramsSchema)
    if (!(await req.paramsSchema.isValid(req.params)))
      return res.status(400).send({ error: 'Validation failed.' });

  return next();
};
