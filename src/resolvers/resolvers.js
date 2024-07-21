const Restaurant = require("../models/restaurant.models");
const Food = require("../models/food.model");
const Customer = require("../models/customer.model");
const Order = require("../models/order.model");

const root = {
  restaurants: async () => await Restaurant.find().populate("foods"),
  foods: async () => await Food.find().populate("restaurant"),
  customers: async () => await Customer.find().populate("orders"),
  orders: async () =>
    await Order.find()
      .populate("restaurant")
      .populate("foods")
      .populate("customer"),

  createRestaurant: async ({ input }) => {
    const newRestaurant = await Restaurant.create(input);
    return newRestaurant;
  },

  updateRestaurant: async ({ id, input }) => {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, input, {
      new: true,
    });
    return updatedRestaurant;
  },

  deleteRestaurant: async ({ id }) => {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    return deletedRestaurant;
  },

  createFood: async ({ input }) => {
    const newFood = await Food.create(input);
    return newFood;
  },

  updateFood: async ({ id, input }) => {
    const updatedFood = await Food.findByIdAndUpdate(id, input, { new: true });
    return updatedFood;
  },

  deleteFood: async ({ id }) => {
    const deletedFood = await Food.findByIdAndDelete(id);
    return deletedFood;
  },

  createCustomer: async ({ input }) => {
    const newCustomer = await Customer.create(input);
    return newCustomer;
  },

  updateCustomer: async ({ id, input }) => {
    const updatedCustomer = await Customer.findByIdAndUpdate(id, input, {
      new: true,
    });
    return updatedCustomer;
  },

  deleteCustomer: async ({ id }) => {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    return deletedCustomer;
  },

  createOrder: async ({ input }) => {
    const newOrder = await Order.create(input);
    return newOrder;
  },

  updateOrder: async ({ id, input }) => {
    const updatedOrder = await Order.findByIdAndUpdate(id, input, {
      new: true,
    });
    return updatedOrder;
  },

  deleteOrder: async ({ id }) => {
    const deletedOrder = await Order.findByIdAndDelete(id);
    return deletedOrder;
  },
};

module.exports = root;
