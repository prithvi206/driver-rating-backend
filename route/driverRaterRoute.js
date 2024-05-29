import express from "express";
import https from "https";
const driverRaterRouter = express();

driverRaterRouter.post("/driver-performance", async (req, res) => {
  const { harshAcceleration, harshBraking, harshTurning } = req.body;
  try {
    if (!harshAcceleration || !harshBraking || !harshTurning) {
      return res
        .status(400)
        .json({ message: "Missing required fields in request body" });
    }

    const postData = JSON.stringify({
      harshAcceleration,
      harshBraking,
      harshTurning,
    });

    const options = {
      hostname: "real-time-driver-performance.onrender.com",
      port: 443, // Use port 443 for HTTPS
      path: "/getScore",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": postData.length,
      },
    };

    const req = https.request(options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const responseData = JSON.parse(data);
          res.json(responseData);
        } catch (error) {
          console.error("Error parsing response:", error);
          res.status(500).json({ message: "Error processing response" });
        }
      });
    });

    req.on("error", (error) => {
      console.error("Error making API request:", error);
      res.status(500).json({ message: "Error making API request" });
    });

    req.write(postData);
    req.end();
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default driverRaterRouter;
