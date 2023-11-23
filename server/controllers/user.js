const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userInput");

const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      budgetLimit,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      confirmPassword,
      budgetLimit,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          "secret_key",
          { expiresIn: "1h" }
        );
        res.json({
          success: true,
          message: "Login Successful",
          token: token,
          userId: user._id,
        });
      } else {
        res.json({
          success: false,
          message: "Incorrect password",
        });
      }
    } else {
      res.json({
        success: false,
        message: "User does not exist",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const route = (req, res) => {
  res.write("Hello");
};

module.exports = { signup, signin, route };
