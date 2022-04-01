const mongoose = require("mongoose");
const users = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});
module.exports = mongoose.model("user", users);
