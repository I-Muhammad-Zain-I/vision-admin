import overalStat from "../models/overallStat.model.ts";

const getSales = async (req: Request, res: Response) => {
  try {
    const overallStats = await overalStat.find();
    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export { getSales };
