import Trip from "../model/trip.js";

// Create a new trip
export const createTrip = async (req, res) => {
  const {
    tripId,
    driverId,
    startDate,
    departureTime,
    arrivalTime,
    originLocation,
    destinationLocation,
    car,
    driver,
    distanceCovered,
    driverRating,
    maximumSpeed,
    averageSpeed,
  } = req.body;

  try {
    const newTrip = await Trip.create({
      tripId,
      driverId,
      startDate,
      departureTime,
      arrivalTime,
      originLocation,
      destinationLocation,
      car,
      driver,
      distanceCovered,
      driverRating,
      maximumSpeed,
      averageSpeed,
    });

    res
      .status(201)
      .json({ message: "Trip created successfully!", trip: newTrip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating trip" });
  }
};

// Get a specific trip by ID
export const getTripById = async (req, res) => {
  const { tripId } = req.params;

  try {
    const trip = await Trip.findOne({ tripId });

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json({ trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting trip" });
  }
};

// Get all trips for a specific driver ID and create preview list
export const getTripsByDriverId = async (req, res) => {
  const { driverId } = req.params;

  try {
    const trips = await Trip.find({ driverId });

    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: "No trips found for driver" });
    }

    const tripPreviews = trips.map((trip) => ({
      tripId: trip.tripId,
      distanceCovered: trip.distanceCovered,
      driverRating: trip.driverRating,
      startDate: trip.startDate,
      carNumberPlate: trip.car.numberPlate,
    }));

    res.status(200).json({ tripPreviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting trips by driver ID" });
  }
};
