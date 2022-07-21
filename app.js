const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Routes
const signupRoute = require("./routes/kyc");
const loginRoute = require("./routes/auth");

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api_v2/kyc/", signupRoute);
app.use("/api_v2/api", loginRoute);

// PORT
const port = 5000;

// Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
