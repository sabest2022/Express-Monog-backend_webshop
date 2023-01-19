const { Schema, model, models } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

UserSchema.pre("save", encryptPassword);

async function encryptPassword(next) {
  this.password = await bcrypt.hash(this.password, 10);
}

const userJoiSchema = Joi.object({
  username: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
  isAdmin: Joi.boolean(),
});

const UserModel = models.user || model("user", UserSchema);

module.exports = { UserModel, userJoiSchema };
