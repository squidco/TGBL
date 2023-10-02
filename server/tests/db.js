const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/tgbl-test";

module.exports.connect = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
  };
  await mongoose.connect(uri, options);
};

module.exports.clearDatabase = async () => {
  await mongoose.connection.dropDatabase();
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};
