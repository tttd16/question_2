const productModel = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getAllProduct = asyncHandler(async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
});

const fillterProduct = asyncHandler(async (req, res) => {
  const fillProduct = await productModel.find({});
  const fillterP = fillProduct.filter(e => e.instock < 100)
  res.json(fillterP);
});

module.exports = {
  getAllProduct,
  fillterProduct,
};
