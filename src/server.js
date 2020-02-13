const express = require("express");
const mongo = require("./db");
const controller = require("./controller");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

mongo.connect();

app.post("/user-route", async (req, res) => {
  const body = req.body;
  const { source, destination, route } = body;
  // TODO: Validation
  const result = await controller.createUserRoute(source, destination, route);
  res.json(result);
});

app.get("/user-route", async (req, res) => {
  const result = await controller.readUserRoute();
  res.json(result);
});

app.listen(port, () => {
  console.log("Started the server on the port ", port);
});
