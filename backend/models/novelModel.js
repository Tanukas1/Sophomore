const mongoose = require("../connection");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  description: String,
  image: String,
  data: String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("Novel", schema);

module.exports = model;
