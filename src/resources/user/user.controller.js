const bcrypt = require("bcrypt");
const { UserModel } = require("./user.model");

async function registerUser(req, res) {
    try {
        const userExist = await UserModel.findOne({ username: req.body.username });

        if (userExist) { return res.status(409).json("User already taken") }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await new UserModel(req.body);
        user.password = hashedPassword;
        await user.save();

        const jsonUser = user.toJSON();
        jsonUser._id = user._id;
        delete jsonUser.password;

        res.status(201).json(jsonUser);
    } catch (err) {
        res.status(500).json({ message: 'Error creating user' }, err);
    };
};

async function loginUser(req, res) {
    try {
        const user = await UserModel.findOne({ username: req.body.username });

        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(401).json("Invalid username or password");
        };

        req.session = { user };
        const jsonUser = user.toJSON();
        delete jsonUser.password;

        res.status(200).json(jsonUser);
    } catch (err) {
        res.status(401).json(err);
    };
};

async function logoutUser(req, res, next) {
    try {
        req.session = null;
        res.status(204).json("Logged out");
    } catch (err) {
        res.status(401).json(err);
    };
};

module.exports = { registerUser, loginUser, logoutUser };