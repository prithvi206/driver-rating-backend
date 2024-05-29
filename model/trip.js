import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: true,
  },
  driverId: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  originLocation: {
    type: String,
    required: true,
  },
  destinationLocation: {
    type: String,
    required: true,
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
  driver: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  distanceCovered: {
    type: Number,
    required: true,
  },
  driverRating: {
    type: Number,
  },
  maximumSpeed: {
    type: Number,
  },
  averageSpeed: {
    type: Number,
  },
});

export default mongoose.model("Trip", tripSchema);
