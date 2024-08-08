import express from "express";
import { getUser } from "../controllers/general.controller.ts";
import { getDashboardStats } from "../controllers/general.controller.ts";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
