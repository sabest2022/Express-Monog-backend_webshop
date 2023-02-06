// ----- Imports mongoose 

const { Schema, model, models } = require("mongoose");

// ----- Imports joi (validation)

const Joi = require("joi");

// ----- Schema to create users

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});

// ----- Validates data before creating user

const userJoiSchema = Joi.object(
    {
        username: Joi.string().email().required(),
        password: Joi.string().min(5).max(18).required(),
        isAdmin: Joi.boolean()
    }
);

// ----- Checks if "User" model exist in DB, if not, it creates it

const UserModel = models.user || model("user", UserSchema);

// ----- Exports model and Joi Schema to router

module.exports = { UserModel, userJoiSchema };