const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

const Food = model("Food", foodSchema);

module.exports = Food;
