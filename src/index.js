const express = require("express");
const app = express();

const quotes = require("./quotes.json")

app.get("/quote", (req, res) => {
    res.status(200).json(quotes);
});

app.get("/random", (req, res) => {
    let index = Math.floor(Math.random() * quotes.length);
    let quote = quotes[index];
    res.status(404).json(quote);
});

app.listen(6756, () => {
    console.log("Server is started");
});
