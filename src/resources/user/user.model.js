const { Schema, model, models } = require("mongoose");
const Joi = require("joi");

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});

const userJoiSchema = Joi.object(
    {
        username: Joi.string().email().required(),
        password: Joi.string().min(5).max(18).required(),
        isAdmin: Joi.boolean()
    }
);

const UserModel = models.user || model("user", UserSchema);

module.exports = { UserModel, userJoiSchema };