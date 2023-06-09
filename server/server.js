const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const RateLimit = require("express-rate-limit");
const { clog } = require("./utils/clog");

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  message: "Too many requests from this IP. Please try again in a minute.",
  max: 15,
});

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Limits how many calls a user can make to the api in a certain time frame
app.use("/api", limiter);
// Custom logging function
app.use(clog);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/spellBooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(apiRoutes);

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});
