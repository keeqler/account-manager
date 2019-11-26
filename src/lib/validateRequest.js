export default schemas => {
  return async (req, res, next) => {
    const result = await Promise.all(
      Object.keys(schemas).map(async k => schemas[k].isValid(req[k]))
    );

    if (result.includes(false))
      return res.status(400).send({ error: 'Validation failed' });

    return next();
  };
};
