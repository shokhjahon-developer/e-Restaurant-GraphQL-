const { connect } = require("mongoose");
const { mongoUri, port } = require("../../config");

const runner = (app) => {
  const bootstrap = async () => {
    await connect(`${mongoUri}`).then(() => {
      console.log("MongoDB connected successfully!");
    });
    app.listen(port, () => {
      console.log(`This server is listening on port: ${port}`);
    });
  };

  bootstrap();
};

module.exports = runner;
