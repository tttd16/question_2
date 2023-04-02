const express = require("express");
const productRouter = express.Router();
const {
  getAllProduct,
  filterProduct,
} = require("../controller/productController");


productRouter.get("/", getAllProduct);

productRouter.get("/fill", filterProduct);

module.exports = productRouter;
