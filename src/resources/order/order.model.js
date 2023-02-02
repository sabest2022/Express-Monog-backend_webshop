const { Schema, model, models } = require('mongoose');
const Joi = require("joi");

const deliveryAddressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true }
});

const orderItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    orderItems: [orderItemSchema],
    date: { type: Date, default: Date.now },
    deliveryAddress: [deliveryAddressSchema],
}, { versionKey: false });

const orderJoiSchema = Joi.object(
    {
        street: Joi.string().required(),
        city: Joi.string().required(),
        zip: Joi.boolean().required(),
        product: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
        user: Joi.string().required(),
        orderItems: Joi.array().required(),
        date: Joi.string().required(),
        deliveryAddress: Joi.array().required()
    } 
)

const OrderModel = models.Order || model("Order", orderSchema);

module.exports = { OrderModel, orderItemSchema, deliveryAddressSchema, orderJoiSchema };