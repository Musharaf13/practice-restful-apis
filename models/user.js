const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    city: String
});

module.exports=mongoose.model('users', UserSchema);