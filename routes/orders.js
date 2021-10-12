
express = require('express')
router = express.Router();
const Order = require('../models/order');

router.get("/", async (req, res) => {

    // try {
    //     const allUsers = await User.find().select('car');
    //     // console.log(allUsers.document.habbits);
    //     res.json(allUsers);
    // } catch (err) {
    //     res.json({ message: "tantan" + err });
    // }
    res.send({message:"this is users scnree"});

});

// // Post a post
router.post("/placeOrder/", async (req, res) => {
    const order = new Order({
        customerName: req.body.customerName,
        address: req.body.address,
        date: req.body.date,
        orderTracker: req.body.orderTracker,
        orderItemsId: req.body.orderItemsId,
        totalPrice: req.body.totalPrice
    });
    const savedOrder = await order.save();
    try {
        res.send(savedOrder);

    } catch (err) {
        res.json({ message: err });
    }


})
//Get All the posts
router.get("/allOrders/", async (req, res) => {
    try {
        const allOrders = await Order.find();
        res.json(allOrders);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;
