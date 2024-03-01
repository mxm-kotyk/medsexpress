const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    const db = await connect(process.env.MONGODB_URI);
    console.log(
      `DB is connected. Name: ${db.connection.name}. Host: ${db.connection.host}. Port: ${db.connection.port}`
        .bold.green
    );
  } catch (error) {
    console.log(error.message.bold.red);
    process.exit(1);
  }
};

module.exports = connectDb;
