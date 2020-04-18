require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./module/feedback_handlers");

// for verbose logging-
app.use(require("morgan")(process.env.logenv));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/AtlanTask", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection
  .once("connected", () => console.log("Connected to DB"))
  .on("error", () => console.log("Error connecting to DB"));

//endpoints
app.use(express.static("views"));

app.use(require("./endpoints/index"));

app.use((err, req, res, next) => {
  console.error(err);
  res.send({ err: err.message });
});

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
module.exports = app;
