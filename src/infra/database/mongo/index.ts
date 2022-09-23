import mongoose from "mongoose";

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    // return mongoose.connect(
    //   "mongodb+srv://ifrs:PmOGjjt56NR39uj0@cluster0.ghnh0fo.mongodb.net/?retryWrites=true&w=majority​"
    // );
    return mongoose.connect("mongodb://localhost:27017/ifrs");
  }
}

export default new Database();
