const express = require('express');
router = express.Router();
const User = require('../models/user');

//Register User
router.post("/", async (req, res) => {
    const user = User({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    });
    const registeredUser = await user.save();
    try {
        res.json(registeredUser);
    } catch (err) {
        res.json({ message: err });
    }

});
//Fetch all users
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (err) {
        res.json({ message: err });
    }

});

//Fetch Specific User
router.get("/:userId", async (req, res) => {
    try {
        const specificUser = await User.findById(req.params.userId);
        res.json(specificUser);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;
