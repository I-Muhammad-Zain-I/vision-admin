import express from "express";
import { getSales } from "../controllers/sales.controller.ts";

const router = express.Router();

router.get("/sales", getSales);

export default router;
