console.log("Lottery Game");


// JavaScript source code
// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "1337"; //specified port


app.get("/", (req, res) => {
    res.status(200).sendfile('lottery.html');
});

app.get("/", (req, res) => {
    res.status(200).sendfile('../../report/css/style.css');
});

// Node Server Ready 
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});



/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});