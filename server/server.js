require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dbConn = require("./config/db");

const path = require("path");
const PORT = process.env.PORT || 5000;

// Import Routes
const peopleRoute = require("./Routes/peopleRoute.js");
const userRoute = require("./Routes/userRoute");

// Middleware
app.use(express.json());

dbConn();

// Route Middleware
app.use("/person", peopleRoute);
app.use("/api/user", userRoute);

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error Logged: ${err}`);
  server.close(() => process.exit(1));
});
