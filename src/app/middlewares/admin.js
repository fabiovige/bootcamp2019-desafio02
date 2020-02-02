export default async (req, res, next) => {
  if (!req.userAdmin) {
    return res.status(401).json({ error: 'Permissão negada' });
  }

  return next();
};
