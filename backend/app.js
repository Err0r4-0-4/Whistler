const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors())
dotenv.config();
const PORT = process.env.PORT;

app.use("/ngo",require("./routes/ngo"))
app.use("/admin",require("./routes/admin"))

mongoose.connect(process.env.mongoDBUrl,()=>{
    console.log(`Server is Up!`);
    app.listen(PORT);
})