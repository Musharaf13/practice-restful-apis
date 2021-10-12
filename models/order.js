const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    customerName: String,
    address: String,
    date: String,
    orderTracker: String,
    orderItemsId: String,
    totalPrice: String,
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('orders', OrderSchema);
