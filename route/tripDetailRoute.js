import express from "express";
import {
  createTrip,
  getTripById,
  getTripsByDriverId,
} from "../controller/tripDetailController.js";
const tripRouter = express();

//create trip
tripRouter.post("/create", createTrip);

// Get trips details by tripId
tripRouter.get("/:tripId", getTripById);

// Get all trips preview for a specific driver ID
tripRouter.get("/:driverId/trips", getTripsByDriverId);

export default tripRouter;
