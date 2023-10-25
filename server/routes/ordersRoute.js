const express = require('express')
const router = express.Router()
const stripe = require("stripe")("sk_test_51MUtDwLQFqE1oBaQ4JxTeli3gFvKYvS2NNDm3bKJcDXecWPcIkAnFAx9fexHwdv3b3NRqsIVOM0bRqNwomeUEyk6000c2FNhSC")
const { v4: uuidv4 } = require('uuid');
const Order = require("../models/orderModel")

router.post("/placeorder", async (req, res) => {
    //destructure the variables li ml front end
    const { token, subtotal, currentUser, cartItems } = req.body
    try {
        //create customer 
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        //create payment
        const payment = await stripe.charges.create({
            amount: subtotal * 100,
            currency: 'EUR',
            customer: customer.id,
            receipt_email: token.email

        }, {
            //unique if for every payment
            idempotencyKey: uuidv4()
        })

        if (payment) {
            const neworder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    Country: token.card.address_country,
                    pincode: token.card.address_zip,
                },
                transactionId: payment.source.id
            })
            neworder.save()
            res.send('Order placed successfully')

        } else {
            res.send('Payment failed')
        }

    } catch (error) {
        return res.status(400).json({ message: 'something went wrong' })
    }

})


router.post("/getuserorders", async (req, res) => {
    const { userid } = req.body
    try {
        const orders = await Order.find({ userid: userid }).sort({ _id: -1 })
        res.send(orders)

    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' })
    }
})

//get all 

router.get("/getallorders", async (req, res) => {
    try {
        const orders = await Order.find({})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})
//update isdeliver status 
router.put("/getallorders/:orderId", async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).send({ message: 'Order not found' });
        }

        order.isDelivered = true;
        await order.save();

        return res.send({ message: 'Order updated successfully' });
    } catch (error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
})

module.exports = router