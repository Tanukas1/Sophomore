const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  description: String,
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  isresolved: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
});

const queryModel = mongoose.model("query", mySchema);
module.exports = queryModel;
