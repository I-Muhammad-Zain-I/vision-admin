import userModel from "../models/user.model.ts";
import overalStat from "../models/overallStat.model.ts";
import transactionModel from "../models/transaction.model.ts";

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    req.status(404).json({ message: error.message });
  }
};

const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    const transactions = await transactionModel
      .find()
      .limit(50)
      .sort({ createdAt: -1 });

    const OverallStat = await overalStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = OverallStat[0];

    const thisMonthStats = OverallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = OverallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getUser, getDashboardStats };
