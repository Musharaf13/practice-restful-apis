const express = require('express');
router = express.Router();
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find().select('car');
        // console.log(allUsers.document.habbits);
        res.json(allUsers);
    } catch (err) {
        res.json({ message: "tantan" + err });
    }
    // res.send({message:"this is users scnree"});

});
// const User = require('../models/user');
module.exports = router;

//Register User
router.post("/", async (req, res) => {
    const user = User({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        habbits: req.body.habbits,
        car: req.body.car
    });
    const registeredUser = await user.save();
    try {
        res.json(registeredUser);
    } catch (err) {
        res.json({ message: err });
    }

});
//Fetch all users


// Fetch Specific User
router.get("/:userId", async (req, res) => {
    try {
        const specificUser = await User.findById(req.params.userId);
        res.json(specificUser);
    } catch (err) {
        res.json({ message: err });
    }
})

