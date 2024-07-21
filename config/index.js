const { env } = process;

const config = {
  port: +env.PORT || 9875,
  mongoUri: env.MONGO_URI,
};

module.exports = config;
