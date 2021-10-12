const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    city: String,
    habbits: Array,
    car:Object
});

module.exports = mongoose.model('users', UserSchema);