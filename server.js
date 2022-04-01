const Router = require("./routes/userRoute");
const express = require("express");
const ConnectDb = require("./config/connectDb");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

ConnectDb();
app.use(express.json());
app.use("/api/users", Router);
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
