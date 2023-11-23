const express = require("express");
const app = express();
// const userRoutes = require("./routes/index");
const cors = require("cors");
const router = require("./routes/index");
const connectDB = require("./db");
app.use(cors());
connectDB();
const port = 4000;

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
