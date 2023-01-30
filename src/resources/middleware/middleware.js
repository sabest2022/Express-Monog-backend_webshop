const { UserModel } = require("../user/user.model")

function isLoggedIn (req, res, next) {
    if (req.session.user) {
        return next();
    }
    
    return res.status(401).json("You are not an Admin, sorry...")
}


function isAdmin(req, res, next) {
    if (req.session.user.isAdmin === true) {
         return next();
    }
    
    return res.status(403).json("You are not an Admin, sorry...")
}

function validate(schema) {
    return function (req, res, next) {
      const { error } = schema.validate(req.body);
      if (!error) return next();
      res.status(400).json(error.message);
    };
  }
  



module.exports = { isAdmin, isLoggedIn, validate }
