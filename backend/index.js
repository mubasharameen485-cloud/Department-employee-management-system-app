const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // .env file ko read karne ke liye

// Apni route.js file ko yahan import kar rahe hain
const libraryRoutes = require("./relation/route"); 

const app = express();

// ==========================================
// MIDDLEWARES
// ==========================================
app.use(cors()); // Frontend ko connect karne ke liye
app.use(express.json()); // Post request ke data (req.body) ko JSON mein parhne ke liye

// ==========================================
// DATABASE CONNECTION
// ==========================================
// Dhyan rakhna ke tumhari .env file mein MONGO_URI majood ho
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch((err) => console.log(" MongoDB Connection Error: ", err));

// ==========================================
// ROUTES SETUP
// ==========================================
// Hamara base URL '/api' hoga. Iske aage /authors ya /books lagega.
app.use("/api", libraryRoutes);

// Base test route (Browser mein check karne ke liye)
app.get("/", (req, res) => {
  res.send("Library System API with Relations is running...");
});

// ==========================================
// SERVER START
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});