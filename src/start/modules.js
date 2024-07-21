require("dotenv/config");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const schema = require("../schemas/schemas");
const root = require("../resolvers/resolvers");

const modules = (app, express) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    })
  );
};

module.exports = modules;
