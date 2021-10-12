const mongoose = require('mongoose');
const item = new mongoose.Schema({
    serial: String,
    quantity: String,
    productName: String,
    unit: String,
    unitPrice: String,
    totalPrice: String
});
const OrderItemsSchema = mongoose.Schema({
    items: [item]
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('ordersItems', OrderItemsSchema);
