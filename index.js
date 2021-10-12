const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors')
app = express();
app.use(bodyParser.json());
const mongoose = require('mongoose');
require('dotenv/config');
// const PORT = 8080;
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("DB connection established");
})

//import routes
const postsRoute = require("./routes/posts")
const usersRoute = require('./routes/users')
const ordersRoute = require('./routes/orders')
const ordersItemsRoute = require('./routes/orderItems')
//Middle Layer
app.use(cors())
app.use(express.static('uploads'))
app.use('/posts', postsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/orderItems', ordersItemsRoute);

//Routes
app.get('/', (req, res) => {
    res.send("This is very default route")
});

app.listen(process.env.PORT);