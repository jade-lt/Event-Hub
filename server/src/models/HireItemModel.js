const mongoose = require("mongoose");

const hireItemSchema = mongoose.Schema({
  name: String,
  color: String,
  size: String,
  amount: Number,
  cost: String,
  // imgUrl: String,
  // costToPurchase: String,
  // supplier: String
});

module.exports = mongoose.model("HireItem", hireItemSchema);

