import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/databaseConfig.js";
import TripRoutes from "./route/tripDetailRoute.js";
import driverRaterRouter from "./route/driverRaterRoute.js";
import driverRouter from "./route/driverDetailRoute.js";
import authRouter from "./route/authRoute.js";
//configure env
dotenv.config();

//database connection
connectDB();

//rest object
const app = express();
//Middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use(cors());

const HealthMessage = [{ status: "Server up" }];

app.use("/api/v1/trip", TripRoutes);
app.use("/api/v1/driver-rating", driverRaterRouter);
app.use("/api/v1/driver-details", driverRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send(HealthMessage);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
