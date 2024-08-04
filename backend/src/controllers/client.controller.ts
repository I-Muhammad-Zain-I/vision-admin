import productModel from "../models/product.model.ts";
import productStatModel from "../models/productStat.model.ts";

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await productStatModel.find({
          productId: product._id,
        });

        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getProducts };
