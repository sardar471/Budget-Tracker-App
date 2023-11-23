const Budget = require("../models/Budget");
const getBudgets = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { page = 1, limit = 10, date } = req.query;

    const query = { userId };
    if (date) {
      query.date = date;
    }

    const options = {
      skip: (page - 1) * limit,
      limit: parseInt(limit),
    };

    const budgets = await Budget.find(query, null, options);

    const totalCount = await Budget.countDocuments(query);

    res.header("X-Total-Count", totalCount);
    res.json(budgets);
  } catch (error) {
    console.error("Error fetching budgets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addBudget = async (req, res) => {
  // const { id } = req.params;

  try {
    const { userId } = req.params;
    console.log(userId);
    const { name, date, price } = req.body;

    const newBudget = new Budget({ name, date, price, userId });
    const savedBudget = await newBudget.save();
    res.json(savedBudget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateBudget = async (req, res) => {
  try {
    const { budgetId } = req.params;
    const { price, date, name } = req.body;
    const updatedBudget = await Budget.findByIdAndUpdate(
      budgetId,
      { price, date, name },
      { new: true }
    );
    res.json(updatedBudget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBudget = async (req, res) => {
  try {
    const { budgetId } = req.params;
    await Budget.findByIdAndDelete(budgetId);
    res.json({ message: "Budget deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBudgets, addBudget, updateBudget, deleteBudget };
