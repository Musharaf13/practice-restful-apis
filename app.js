const express = require("express");
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());
const mongoose = require('mongoose');
require('dotenv/config');
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("DB connection established");
})

//import routes
const postsRoute = require("./routes/posts")
//Middle Layer
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send("this is the default route")
});

app.listen(3000);