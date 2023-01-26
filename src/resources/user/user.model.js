const { Schema, model, models } = require("mongoose");

const AddressSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
});

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    deliveryAddress: {
        type: AddressSchema,
        required: true
    },
});

const UserModel = models.user || model("user", UserSchema);

module.exports = { UserModel };