import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("");
})

// TODO: get port from .env file
const port = 5000;

app.listen(port);
