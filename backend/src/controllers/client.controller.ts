import userModel from "../models/user.model.ts";
import productModel from "../models/product.model.ts";
import productStatModel from "../models/productStat.model.ts";
import transactionModel from "../models/transaction.model.ts";

const getProducts = async (req: Request, res: Response) => {
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

const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await userModel
      .find({ role: "user" })
      .select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTransactions = async (req: Request, res: Response) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await transactionModel
      .find({
        $or: [
          { cost: { $regex: new RegExp(search, "i") } },
          { userId: { $regex: new RegExp(search, "i") } },
        ],
      })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await transactionModel.countDocuments();

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getProducts, getCustomers, getTransactions };
