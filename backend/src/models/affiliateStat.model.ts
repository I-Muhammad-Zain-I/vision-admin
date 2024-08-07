import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User", // refers to data model
    },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  {
    timestamps: true,
  }
);

const affiliateStatModel = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default affiliateStatModel;
