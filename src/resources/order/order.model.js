const { Schema, model, models } = require('mongoose');

const deliveryAddressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true }
});

const orderItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, default: 0 }
});

const orderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    orderItems: [orderItemSchema],
    date: { type: Date, default: Date.now },
    deliveryAddress: [deliveryAddressSchema],
    shipped: { type: Boolean, default: false },
}, { versionKey: false });

const OrderModel = models.Order || model("Order", orderSchema);

module.exports = { OrderModel, orderItemSchema, deliveryAddressSchema };