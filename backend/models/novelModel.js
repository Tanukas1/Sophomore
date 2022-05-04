const mongoose = require("../connection");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  price: String,
  author: String,
  rentable: { type: Boolean, default: false },
  rentprice: Number,
  uploadedBy : { type: mongoose.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("Novels", schema);

module.exports = model;
