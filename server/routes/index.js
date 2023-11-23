const express = require("express");
const router = express.Router({ mergeParams: true });
const userRouter = require("./user");
const budgetRouter = require("./budget");
router.use("/users", userRouter);
router.use("/users/:userId/budgets", budgetRouter);

module.exports = router;
