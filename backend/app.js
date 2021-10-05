const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
dotenv.config();
app.use(express.urlencoded());
app.use(express.json());
const PORT = process.env.PORT || 9000;

app.use("/ngo", require("./routes/ngo"));
app.use("/admin", require("./routes/admin"));
app.use("/factory", require("./routes/factory"));
app.use("/public", require("./routes/public"));

mongoose.connect(process.env.mongoDBUrl, () => {
  console.log(`Server is Up!`);
  app.listen(PORT);
});
