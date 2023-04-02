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


async function getOrderList(req, res) {
  try {
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'inventory',
          localField: 'item',
          foreignField: 'sku',
          as: 'product'
        }
      },
      {
        $project: {
          _id: 1,
          item: 1,
          price: 1,
          quantity: 1,
          description: { $arrayElemAt: ['$product.description', 0] }
        }
      }
    ]).exec();

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getAllProduct,
  fillterProduct,
};
