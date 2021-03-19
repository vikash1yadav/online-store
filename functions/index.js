const functions = require('firebase-functions');
const express = require("express");
//const cors = require("cors");

const app = express();

app.use(express.json());


app.get("/",(req, res) =>
    res.status(200).send("hello world")

)

// listen command
exports.api = functions.https.onRequest(app)
