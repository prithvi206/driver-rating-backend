import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  driverId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  car: {
    numberPlate: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    buildYear: {
      type: Number,
      required: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Driver", driverSchema);
