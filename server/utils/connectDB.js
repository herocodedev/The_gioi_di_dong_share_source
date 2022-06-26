const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(">>>>>>>>>>>>>>>> Connect Successfully! <<<<<<<<<<<<<<<<<");
  } catch (error) {
    console.log(error);
    console.log("Connect fail!");
  }
};

module.exports = { connectMongoDB };
