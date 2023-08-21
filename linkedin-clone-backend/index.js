const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("I am working");
});

app.get*("/hello", (req, res) => {
    res.send("Hello world! This is the new route!");
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
