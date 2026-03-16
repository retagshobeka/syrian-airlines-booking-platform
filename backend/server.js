const express = require("express");
const app = express();

const flightsRoutes = require("./routes/flights");

app.use("/api/flights", flightsRoutes);

app.get("/", (req, res) => {
  res.send("Skyva System API running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
