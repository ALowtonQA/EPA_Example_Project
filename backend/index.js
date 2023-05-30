"use strict";

// Setup
const mongoURL = "mongodb://127.0.0.1:27017/EPA";
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8080;
const review_routes = require("./Routes/reviews");
const user_routes = require("./Routes/users");

// Middleware, Routes & Config
APP.use(CORS());                       // Disable Cross Origin Resource Sharing Restrictions
APP.use(EXPRESS.json());              // JSON Body Parser
APP.use(user_routes);                // Routes for collections
APP.use(review_routes);             // ""

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