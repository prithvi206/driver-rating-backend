import express from "express";
import {
  createDriver,
  getDriverById,
} from "../controller/driverDetailController.js";
const driverRouter = express();

driverRouter.post("/create", createDriver);
driverRouter.get("/:driverId", getDriverById);

export default driverRouter;
