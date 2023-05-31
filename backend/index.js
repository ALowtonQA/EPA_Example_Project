"use strict";

// Setup
const mongoURL = "mongodb://127.0.0.1:27017/EPA";
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;
const review_routes = require("./routes/reviews");
const user_routes = require("./routes/users");

// Middleware, Routes & Config
app.use(cors());                       // Disable Cross Origin Resource Sharing Restrictions
app.use(express.json());              // JSON Body Parser
app.use(user_routes);                // Routes for collections
app.use(review_routes);             // ""

// Connect to MongoDB
mongoose
    .connect(mongoURL, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Connection Succesful");
    }).catch((err) => { 
        console.log("MongoDB Connection Failed!!!");
    });

// Listen on port
let server = app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`App listening at http://localhost:${port}`);
    }
});

module.exports = server;