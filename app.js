require("dotenv").config();
const express = require("express");
const cors = require("cors");

const shipRoutes = require("./routes/shipRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is alive");
});

// connect routes
app.use("/api", shipRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});