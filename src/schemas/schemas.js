const { buildSchema } = require("graphql");

const schema = new buildSchema(`#graphql

 type Restaurant{
 id: ID!
 name: String!
 address: String!
 foods: [Food]
}

type Food{
id: ID
name: String
price: Float
restaurant: Restaurant
}

type Customer{
id: ID
fullname: String
email: String
orders: [Order]
}

type Order{
id: ID
cutomer: Customer
restaurant: Restaurant
food: Food
total: Float
status: String!
}

input RestaurantInput{
name: String!
address: String!
}

input FoodInput{
name: String!
price: Float
restaurantId: ID!
}

input CustomerInput{
name: String!
email: String!
}

input OrderInput{
customerId: ID!
restaurantId: ID!
foodId: ID!
total: Float
status: String
}


type Query{
restaurants: [Restaurant]
foods: [Food]
cutomers: [Customer]
orders: [Order]
}


type Mutation{
 createRestaurant(input: RestaurantInput): Restaurant
 updateRestaurant(id: ID!, input: RestaurantInput): Restaurant
 deleteRestaurant(id: ID!): Restaurant
 createFood(input: FoodInput): Food
 updateFood(id: ID!, input: FoodInput): Food
 deleteFood(id: ID!): Food
 createCustomer(input: CustomerInput): Customer
 updateCustomer(id:ID!, input: CustomerInput): Customer
 deleteCustomer(id:ID!): Customer
 createOrder(input: OrderInput): Order
 updateOrder(id: ID!, input: OrderInput): Order
 deleteOrder(id: ID!): Order
}

`);

module.exports = schema;
