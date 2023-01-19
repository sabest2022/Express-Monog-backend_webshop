const { ProductModel } = require("../product/product.model");
const { OrderModel } = require("./order.model");

async function createOrder(req, res, next) {
  const order = await new OrderModel({
    ...req.body,
    customer: req.session._id,
  });

  //Minska lagersaldot på beställda produkter
  for (const orderItem of req.body.orderItems) {
    let product = await ProductModel.findById(orderItem.product);

    if (product) {
      product.inStock -= orderItem.quantity;
      await product.save();
    }
  }

  res.status(201).json(order);
}

module.exports = { createOrder };
