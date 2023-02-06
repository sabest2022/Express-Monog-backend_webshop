// ----- Imports express

const express = require("express");

// ----- Imports functions from controller and middlewere

const { registerUser, loginUser, logoutUser } = require("./user.controller");
const { validate } = require("../middleware/middleware");

// ----- Imports validation schema

const { userJoiSchema } = require ("./user.model");

// ----- Creates router

const userRouter = express.Router();

// ----- Creates endpoints 

userRouter.post("/register", validate(userJoiSchema), registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

// ----- Exports router

module.exports = { userRouter };