import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://prithviraj2062001:yDUpM4Jw7XnRhpdz@cluster0.6ys8wgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Connected to Mongodb Database`.bgGreen.white);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
