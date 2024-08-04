import { MongooseError } from "mongoose";
import userModel from "../models/user.model.ts";

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    req.status(404).json({ message: error.message });
  }
};

export { getUser };
