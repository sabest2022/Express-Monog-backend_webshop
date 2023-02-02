const { OrderModel } = require('./order.model');
const { ProductModel } = require("../product/product.model");

async function createOrder(req, res, next) {
    try {

        const order = new OrderModel({
            customer: req.session.user._id,
            isAdmin: req.session.user.isAdmin,
            orderItems: req.body.orderItems,
            deliveryAddress: req.body.deliveryAddress
        })
        order.save()

        for (items of [order]) {
            for (item of items.orderItems) {
                let product = await ProductModel.findById(item.product);

                // if (product.inStock - (items.quantity < 0)) { return res.status(400).json("Sold out.") }
                product.inStock -= item.quantity;
                await product.save();
            }
        }
        res.status(201).json(order)
    } catch (err) {
        res.status(404).json(err)
    }
}

async function getAllOrders(req, res) {
    try {
        if (req.session.user.isAdmin === true) {
            const allOrders = await OrderModel.find({})
            const adminOrders = allOrders.filter(order => order.isAdmin); // filtrera order som är från admin
            const userOrders = allOrders.filter(order => !order.isAdmin); // filtrera order från användare
            
            return res.status(200).json(  {userOrders, adminOrders} ); // skicka som response
        }
        const user = req.session.user._id
        const orders = await OrderModel.find({ user: user })
        res.status(200).json(orders)
    } catch {
        res.status(404).json("user has no orders yet.")
    }
}





async function getOrderId(req, res) {
    const user = req.session.user._id
    console.log(user);
    // const orders = await OrderModel.find{}
}

module.exports = { createOrder, getAllOrders, getOrderId }