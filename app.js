const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Routes
const authRoutes = require("./routes/auth");
const kycRoutes = require("./routes/kyc");

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api_v2/api", authRoutes);

// PORT
const port = 5000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
