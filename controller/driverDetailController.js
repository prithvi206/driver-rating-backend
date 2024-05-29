import Driver from "../model/driver.js";

// Create a new driver
export const createDriver = async (req, res) => {
  console.log(req);
  const { driverId, email, car, name, phone } = req.body;

  try {
    const newDriver = await Driver.create({
      driverId,
      email,
      car,
      name,
      phone,
    });

    res
      .status(201)
      .json({ message: "Driver created successfully!", driver: newDriver });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      // Handle duplicate email error
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Error creating driver" });
    }
  }
};

// Get a specific driver by ID
export const getDriverById = async (req, res) => {
  const { driverId } = req.params;

  try {
    const driver = await Driver.findOne({ driverId });

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json({ driver });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting driver" });
  }
};
