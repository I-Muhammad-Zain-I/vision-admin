import mongoose from "mongoose";
import userModel from "../models/user.model.ts";
import transactionModel from "../models/transaction.model.ts";

const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await userModel.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUserPerformance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);

    const userWithStats = await userModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(id) }, // matches the user
      },
      {
        $lookup: {
          from: "affiliatestats", // checks affiliatestat collection and compares id to userId in affiliatestats collection
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      {
        $unwind: "$affiliateStats", // flattens the array
      },
    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return transactionModel.findById(id);
      })
    );

    const filterSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res.status(200).json({
      user: userWithStats[0],
      sales: filterSaleTransactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getAdmins, getUserPerformance };
