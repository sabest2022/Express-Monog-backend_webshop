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
            
            // if (product.inStock - (items.quantity < 0)) { return res.status(400).json("Sold out.") }
            product.inStock -= item.quantity;
            await product.save();
        }
    }
    res.status(201).json(order)
}

async function getAllOrders(req, res) {
    try {
        if (req.session.user.isAdmin === true) {
            const allOrders = await OrderModel.find({})
            return res.status(200).json(allOrders);
        }
        const user = req.session.user._id
        const orders = await OrderModel.find({ user: user})
        res.status(200).json(orders)
    } catch {
        res.status(404).json("user " + user + " has no orders yet.")
    }
}





async function getOrderId(req, res) {
    const user = req.session.user._id
    console.log(user);
    // const orders = await OrderModel.find{}
}

module.exports = { createOrder, getAllOrders, getOrderId }