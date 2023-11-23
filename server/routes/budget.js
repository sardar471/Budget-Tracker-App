// routes/budgetRoutes.ts
const express = require("express");

const {
  getBudgets,
  addBudget,
  updateBudget,
  deleteBudget,
} = require("../controllers/BudjetControl");

const router = express.Router({ mergeParams: true });

router.get("/", getBudgets);
router.post("/", addBudget);
router.put("/:budgetId", updateBudget);
router.delete("/:budgetId", deleteBudget);

module.exports = router;
