const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const carPostRoutes = require("./routes/carPostRoutes");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/data", express.static(path.join(__dirname, "data")));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", userRoutes);
app.use("/api/car", carPostRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
