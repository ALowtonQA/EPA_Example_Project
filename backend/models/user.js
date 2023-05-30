"use strict";

// Setup
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Create Schema
const user_schema = new schema({
	username: String,
	password: String
});

module.exports = mongoose.model("User", user_schema);