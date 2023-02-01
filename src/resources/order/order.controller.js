const { OrderModel }  = require('./order.model');
const { ProductModel} = require("../product/product.model");

async function createOrder(req, res, next) {
    const order = new OrderModel({
        user: req.session.user._id,
        orderItems: req.body.orderItems,
        deliveryAddress: req.body.deliveryAddress
    })
    order.save()
    
    for (items of [order]){
        for (item of items.orderItems){
            let product = await ProductModel.findById(item.product);
            console.log(product.inStock)
            console.log(item.quantity)
            
            // if (product.inStock - (items.quantity < 0)) { return res.status(400).json("Sold out.") }
            product.inStock -= item.quantity;
            await product.save();
        }
    }

    res.status(201).json(order)
}

module.exports = { createOrder }