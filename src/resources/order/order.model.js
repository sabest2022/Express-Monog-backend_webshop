const { Schema, model, models } = require('mongoose');

const deliveryAddressSchema = new Schema({
    street: {type: String, required: true },
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

const OrderModel = models.Order || model("Order", orderSchema);

module.exports = { OrderModel, orderItemSchema, deliveryAddressSchema };