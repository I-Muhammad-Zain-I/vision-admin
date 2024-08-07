import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import clientRoutes from "./routes/client.route.ts";
import generalRoutes from "./routes/general.route.ts";
import managementRoutes from "./routes/management.route.ts";
import salesRoutes from "./routes/sales.route.ts";
import connectDB from "./config/db.ts";

import transactionModel from "./models/transaction.model.ts";
import userModel from "./models/user.model.ts";
import productModel from "./models/product.model.ts";
import productStatModel from "./models/productStat.model.ts";
import overalStat from "./models/overallStat.model.ts";
import affiliateStatModel from "./models/affiliateStat.model.ts";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 9000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    // affiliateStatModel.insertMany(dataAffiliateStat);
    // overalStat.insertMany(dataOverallStat);
    // productStatModel.insertMany(dataProductStat);
    // productModel.insertMany(dataProduct);
    // transactionModel.insertMany(dataTransaction);
  })
  .catch((error) => {});
