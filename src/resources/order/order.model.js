const { Schema, model, models } = require("mongoose");

const OrderItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, red: "product", required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const DeliveryAdressSchema = new Schema({
  street: { type: String, required: true },
  zip: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const OrderSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "user", required: true },
  orderItems: { type: [OrderItemSchema], required: true },
  deliveryAdress: { type: DeliveryAdressSchema, required: true },
});

const OrderModel = models.order || model("order", OrderSchema);

module.exports = { OrderModel };
