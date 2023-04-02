const express = require("express");
const router = express.Router();

const {  getOrderList } = require("../controller/orderController.js");

router.get("/", getOrderList);

module.exports = router;
