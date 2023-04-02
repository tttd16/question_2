const asyncHandler = require("express-async-handler");
const orderModel = require("../models/orderModel.js");
const productModel = require("../models/productModel");


const getOrderList = asyncHandler(async (req, res) => {
  try {
    const orders = await orderModel.find().lean().exec();

    for (let i = 0; i < orders.length; i++) {
      const orderItem = orders[i];
      const product = await productModel.findOne({ sku: orderItem.item }).lean().exec();
      if (product) {
        orderItem.description = product.description;
      }
    }
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

module.exports = {
  getOrderList
};
