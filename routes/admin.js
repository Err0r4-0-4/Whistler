const { Router } = require("express");
const express = require("express");
const adminController = require("../controllers/admin");

const route = express.Router();

route.post("/login", adminController.loginAdmin);
route.post("/assignNgo", adminController.assignNgo);
module.exports = route;
