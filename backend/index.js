"use strict";

// Setup
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8080;
const mongoURL = "mongodb://127.0.0.1:27017/EPA";

// Connect to MongoDB
mongoose
    .connect(mongoURL, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Connection Succesful");
    }).catch((err) => { 
        console.log("MongoDB Connection Failed!!!");
    });

module.exports = server;