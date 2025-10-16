import {
  getFinancialsForSymbol,
  getDax40Overview,
  getStockOverviewBySymbol,
} from "../controller/stocksController.js";
import { Router } from "express";

const router = Router();

// Get overview of all DAX40 stocks
router.get("/dax40", getDax40Overview);

// Get overview of a single stock
router.get("/overview/:symbol", getStockOverviewBySymbol);

// Get financials for a specific symbol
router.get("/financials/:symbol", getFinancialsForSymbol);

// Test route
router.get("/test", (req, res) => {
  res.send("Test-Route funktioniert!");
});

export default router;
