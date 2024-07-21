const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  address: String,
  foods: [{ type: Schema.Types.ObjectId, ref: "Food" }],
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
