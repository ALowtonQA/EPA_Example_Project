"use strict";

// Setup
const router = require("express").Router();
const review = require("../Models/review");

// Get Requests (200 is default HTTP status code)
router.get("/review/getAll", async(req, res, next) => {
    try {
        const reviews = await review.find();
        res.send(reviews);
    } catch(err) {
        next(new Error(err.message));
    }
});

// Export
module.exports = router;