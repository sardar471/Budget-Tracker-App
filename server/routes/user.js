// routes/budgetRoutes.ts
const express = require("express");

const { signin, signup } = require("../controllers/user");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
