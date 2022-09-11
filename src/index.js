const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");

app.use(express.json());
app.use((req, res, next) => {
    console.log("HTTP " + req.method + " ,URL - " + req.url);
    next();
});

app.use("/users", userRouter);
app.use("/notes", noteRouter);


mongoose.connect("mongodb+srv://YashKr09:rh7t5xhYZPwt58k0@cluster0.qgtjhtt.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(6756, () => {
            console.log("Server is started");
        });
    }).catch((error) => {
        console.log(error);
    });

