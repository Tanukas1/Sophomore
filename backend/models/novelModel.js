const mongoose = require("../connection");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  description: String,
  heroimage: String,
  price: String,
  author: String,
  data: String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("Novels", schema);

module.exports = model;
