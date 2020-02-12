const express = require("express");
const mongo = require("./db");
const controller = require("./controller");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

mongo.connect();

app.post("/user-route", async (req, res) => {
  const body = req.body;
  const { route } = body;
  // TODO: Validation
  const result = await controller.createUserRoute(route);
  res.json(result);
});

app.get("/user-route", async (req, res) => {
  const result = await controller.readUserRoute();
  res.json(result);
});

app.listen(port, () => {
  console.log("Started the server on the port ", port);
});