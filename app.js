const express = require("express");
const bodyParser = require('body-parser');
app = express();
app.use(bodyParser.json());
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = 8080;
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("DB connection established");
})

//import routes
const postsRoute = require("./routes/posts")
const usersRoute = require('./routes/users')
//Middle Layer
app.use(express.static('uploads'))
app.use('/posts', postsRoute);
app.use('/users', usersRoute);

//Routes
app.get('/', (req, res) => {
    res.send("This is very default route")
});

app.listen(process.env.PORT);