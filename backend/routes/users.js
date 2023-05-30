"use strict";

// Setup
const router = require("express").Router();
const user = require("../models/user");

// // Get Requests (200 is default HTTP status code)
router.post("/user/login", async(req, res, next) => {
    try {
        const existing = await user.exists({username: req.body.username, password: req.body.password});
        if (existing) {
            res.send(existing);
        } else {
            res.status(404).send();
        }   
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = router;