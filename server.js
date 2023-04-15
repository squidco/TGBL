const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const { clog } = require("./utils/clog");

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Custom logging function
app.use(clog)

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/spellBooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(apiRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});
