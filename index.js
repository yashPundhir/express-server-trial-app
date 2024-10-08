const express = require("express"); // require module syntax (old style or common JS style)
// import express from "express"; // (new style or module JS style)
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/github", (req, res) => {
	res.send("github route is searched");
});

app.get("/login", (req, res) => {
	res.send("<h1>login route</h1>");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
