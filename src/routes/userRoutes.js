const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
    res.send("Sign Up");
});

userRouter.post("/signin", (req, res) => {
    res.send("Sign In");
});

module.exports = userRouter

