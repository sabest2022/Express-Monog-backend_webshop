
const { Schema, model, models } = require('mongoose');


const DeliveryAddressSchema = new Schema({
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

const orderItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const orderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    orderItems: { type: [orderItemSchema], required: true },
    date: {
        type: Date,
        default: Date.now
    },
    deliveryAddress: { type: DeliveryAddressSchema, required: true },
});
const OrderModel = models.Order || model("Order", orderSchema);
module.exports = { OrderModel };