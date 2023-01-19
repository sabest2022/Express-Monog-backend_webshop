const { UserModel } = require("./user.model");
const bcrypt = require("bcrypt");
const ServerError = require("../serverError");

async function registerUser(req, res, next) {
  try {
    const userExists = await UserModel.findOne({ username: req.body.username });
    if (userExists) {
      return res.status(409).json("User already exists");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await new UserModel(req.body);
    user.password = hashedPassword;
    await user.save();

    const jsonUser = user.toJSON();
    jsonUser._id = user._id;
    delete jsonUser.password;

    res.status(201).json(jsonUser);
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  const user = await UserModel.findOne({ username: req.body.username });

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(401).json("Wrong username or password");
  }

  req.session = user;

  const jsonUser = user.toJSON();
  jsonUser._id = user._id;
  delete jsonUser.password;

  res.status(200).json(jsonUser);
}

async function logoutUser(req, res, next) {
  try {
    req.session = null;
    res.status(204).json("Logged out");
  } catch (error) {
    next(error);
  }
}

module.exports = { registerUser, loginUser, logoutUser };
