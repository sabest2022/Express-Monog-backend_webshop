const { OrderModel } = require('./order.model');
const { ProductModel } = require("../product/product.model");

async function createOrder(req, res, next) {
    try {

        const order = new OrderModel({
            customer: req.session.user._id,
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
        if (req.session.user.isAdmin) {
            const allOrders = await OrderModel.find({}).populate("customer")

            return res.status(200).json(allOrders);  // skicka som response
        }
        const user = req.session.user._id
        const orders = await OrderModel.find({ user: user })
        res.status(200).json(orders)
    } catch {
        res.status(404).json("user has no orders yet.")
    }
}





async function getOrderId(req, res) {
    try {
        if (req.session.user.isAdmin) {
            const order = await OrderModel.findOne({ _id: req.params.id }).populate("customer")
            return res.status(200).json(order);
        }
        const user = req.session.user._id
        const orders = await OrderModel.find({ user: user }).populate("customer")
        const order = orders.find(element => (req.params.id == element._id))
        if (!order) {
            res.status(404).json("order does not exist")
        }
        console.log(order.customer._id);
        res.status(200).json(order)
    } catch {
        res.status(404).json("user has no orders yet.")
    }
}

    module.exports = { createOrder, getAllOrders, getOrderId }