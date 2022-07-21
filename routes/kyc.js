const express = require("express");
const router = express.Router();

const { signup, forgetPassword } = require("../controllers/auth");

router.post("/signup", signup);

router.post("/forget-password", forgetPassword);

module.exports = router;
