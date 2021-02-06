modeule.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You have to log in!" });

    next();
  }
};
