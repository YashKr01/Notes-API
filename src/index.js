const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");

app.use("/users", userRouter);
app.use("/notes", noteRouter);

mongoose
    .connect("mongodb+srv://YashKr09:Mongoose@4545@cluster0.qgtjhtt.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(6756, () => {
            console.log("Server is started");
        });
    }).catch((error) => {
        console.log(error);
    });

