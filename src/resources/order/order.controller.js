const { OrderModel } = require('./order.model');
const { ProductModel } = require("../product/product.model");

async function createOrder(req, res, next) {
    try {
        const order = new OrderModel({
            customer: req.session.user._id,
            orderItems: req.body.orderItems,
            deliveryAddress: req.body.deliveryAddress
        })
        


        for (items of [order]) {
            for (orderItem of items.orderItems) {
                let product = await ProductModel.findById(orderItem.product);

                product.inStock -= orderItem.quantity;
                orderItem.price = product.price * orderItem.quantity;
                await product.save();
                order.save()
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
            if (!order) {
                return res.status(404).json(req.params.id + " not found")
            }
            return res.status(200).json(order);
        }
        const user = req.session.user._id
        const orders = await OrderModel.find({ user: user }).populate("customer")
        const order = orders.find(element => (req.params.id == element._id))
        if (!order) {
            return res.status(404).json(req.params.id + " not found")
        }

        if (!(order.customer._id == req.session.user._id)) {
            return res.status(403).json("not user's order!")
        }
        res.status(200).json(order)
    } catch {
        res.status(404).json("user has no orders yet.")
    }
}

async function isShipped(req, res) {
    const order = await OrderModel.findById({ _id: req.params.id })
    order.shipped = true;
    await order.save()
    res.status(200).json(order)
}

module.exports = { createOrder, getAllOrders, getOrderId, isShipped }