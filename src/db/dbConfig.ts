import mongoose from "mongoose";

const connect = async () => {
  // try {
  //   await mongoose.connect(process.env.MONGO_URL!);
  //   const connection = mongoose.connection;

  //   connection.on("connected", () => {
  //     console.log("MongoDb connected successfully with mongoose!");
  //   });

  //   connection.on("error", (err) => {
  //     console.log("MongoDb did't connect successfully with mongoose" + err);
  //     process.exit();
  //   });
  // } catch (err) {
  //   console.log("Something is wrong!");
  //   console.log(err);
  // }
  await mongoose.connect(process.env.MONGO_URL!);
};

export default connect;
