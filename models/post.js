const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: String,
    skill: String,
    userId: String,
    productImage: String
});

module.exports = mongoose.model('Posts', PostSchema);
