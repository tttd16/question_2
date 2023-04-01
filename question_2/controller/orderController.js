const asyncHandler = require("express-async-handler");
const orderModel = require("../models/orderModel.js");
const productModel = require("../models/productModel");

const getOrders = asyncHandler(async (req, res) => {
  const orders = await orderModel.find({});

  const a = await productModel.find({});

  const ordersMap = orders.map((e) => {
    const item = e.item;
    const fillProduct = a.find((element) => element.sku === item);

    console.log("aaaa");

    return {
      ...e,
      description: fillProduct.description,
    };
  });
  console.log(ordersMap);
  res.json(ordersMap);
});

module.exports = {
  getOrders,
};
