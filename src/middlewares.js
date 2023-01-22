function validate(schema) {
  return function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (!error) return next(error);
    //console.error(error.message);
    res.status(400).json(error.message);
  };
}

function authorize(req, res, next) {
  if (req.session._id) {
    return next();
  }

  res.status(401).json("Not authorized");
}

function admin(req, res, next) {
  if (req.session.isAdmin) {
    return next();
  }

  res.status(403).json("Not an admin user");
}

module.exports = { validate, authorize, admin };
