const OrderModel = require('./order.model');
// const Product = require('../product/product.model');
const User = require('../user/user.model');


async function createOrder(req, res, next) {
    const userId = req.body.userId;
    // const products = req.body.products;
    let totalPrice = 0;
    let orderItems = [];

    // Validate customer
    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'Invalid user.' });
            }

            // // Validate products and calculate total price
            // products.forEach(product => {
            //   Product.findById(product.productId)
            //     .then(foundProduct => {
            //       if (!foundProduct) {
            //         return res.status(404).json({ message: 'Invalid product.' });
            //       }
            //       if (foundProduct.inStock < product.quantity) {
            //         return res.status(404).json({ message: 'Product out of stock.' });
            //       }

            //       // Update product stock
            //       foundProduct.inStock -= product.quantity;
            //       foundProduct.save();

            //       // Add product to order items
            //       orderItems.push({
            //         product: product.productId,
            //         quantity: product.quantity,
            //         price: foundProduct.price
            //       });

            //       totalPrice += foundProduct.price * product.quantity;
            //     })
            //     .catch(err => {
            //       return res.status(500).json({ message: 'Fetching product failed.' });
            //     });
            // });

            // Create order
            const order = new OrderModel({
                user: userId,
                orderItems: orderItems,
                totalPrice: totalPrice,
                deliveryAddress: user.address
            });
            order.save()
                .then(createdOrder => {
                    res.status(201).json({
                        message: 'Order created successfully.',
                        orderId: createdOrder._id
                    });
                })
                .catch(err => {
                    return res.status(500).json({ message: 'Creating order failed.' });
                });
        })
        .catch(err => {
            return res.status(500).json({ message: 'Fetching customer failed.' });
        });
};

module.exports = { createOrder }