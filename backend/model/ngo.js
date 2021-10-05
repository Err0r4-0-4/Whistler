const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ngoSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("ngo", ngoSchema);