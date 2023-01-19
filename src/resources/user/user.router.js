const express = require("express");
const { registerUser, loginUser, logoutUser } = require("./user.controller");
const userRouter = express.Router();
const { userJoiSchema } = require("./user.model");
const { validate } = require("../../middlewares");

userRouter.post("/register", validate(userJoiSchema), registerUser);
userRouter.post("/login", validate(userJoiSchema), loginUser);
userRouter.post("/logout", logoutUser);

module.exports = { userRouter };
