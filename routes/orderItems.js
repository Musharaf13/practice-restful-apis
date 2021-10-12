
express = require('express')
router = express.Router();
const OrderItems = require('../models/orderItems');

router.get("/", async (req, res) => {
    // try {
    //     const allUsers = await User.find().select('car');
    //     // console.log(allUsers.document.habbits);
    //     res.json(allUsers);
    // } catch (err) {
    //     res.json({ message: "tantan" + err });
    // }
    res.send({ message: "this is Order tiems scnree" });

});
//Fetch All Order Items
router.get("/allOrderItems/", async (req, res) => {
    // try {
    //     const allUsers = await User.find().select('car');
    //     // console.log(allUsers.document.habbits);
    //     res.json(allUsers);
    // } catch (err) {
    //     res.json({ message: "tantan" + err });
    // }
    res.json(await OrderItems.find());

});
//Fetch Particual Order OrderItems
router.get("/:orderId", async (req, res) => {
    res.json(await OrderItems.findById(req.params.orderId));

});

// // Post a post
router.post("/placeOrderItems/", async (req, res) => {
    const orderItems = new OrderItems({
        items: req.body.items,
    });
    const savedOrderItems = await orderItems.save();
    try {
        res.send(savedOrderItems.id);

    } catch (err) {
        res.json({ message: err });
    }


})
//
router.post("/placeOrderItems/", async (req, res) => {
    const orderItems = new OrderItems({
        items: req.body.items,
    });
    const savedOrderItems = await orderItems.save();
    try {
        res.send(savedOrderItems.id);

    } catch (err) {
        res.json({ message: err });
    }


})
module.exports = router;
