const express = require("express");
const router = express.Router();

const flights = [
 { airline: "Syrian Air", from: "Damascus", to: "Dubai" },
 { airline: "Cham Wings", from: "Damascus", to: "Moscow" },
 { airline: "Fly Baghdad", from: "Damascus", to: "Cairo" }
];

router.get("/", (req, res) => {
  res.json(flights);
});

module.exports = router;
