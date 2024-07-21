const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  foods: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  total: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
