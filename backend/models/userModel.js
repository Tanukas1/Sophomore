const mongoose = require("../connection");
const Schema = mongoose.Schema;

const schema = new Schema({
  username: String,
  email: String,
  password: String,
  dob: Date,
});

const model = mongoose.model("users", schema);

module.exports = model;
