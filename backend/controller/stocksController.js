import {
  getCompanyFinancials,
  getStockOverview,
} from "../services/finnhubService.js";
import { dax40 } from "../data/dax40.js";

export const getFinancialsForSymbol = async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const data = await getCompanyFinancials(symbol);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fehler beim Abrufen der Finanzdaten" });
  }
};

export const getDax40Overview = async (req, res) => {
  try {
    console.log("Fetching DAX40 overview...");

    // Fetch all stock overviews in parallel
    const stockPromises = dax40.map((symbol) => getStockOverview(symbol));
    const stocks = await Promise.all(stockPromises);

    // Filter out stocks with errors or zero prices (optional)
    const validStocks = stocks.filter((stock) => stock.currentPrice > 0);

    res.json({
      total: validStocks.length,
      stocks: validStocks,
    });
  } catch (error) {
    console.error("Error fetching DAX40 overview:", error);
    res.status(500).json({
      message: "Fehler beim Abrufen der DAX40 Übersicht",
      error: error.message,
    });
  }
};

export const getStockOverviewBySymbol = async (req, res) => {
  const { symbol } = req.params;

  try {
    const data = await getStockOverview(symbol);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Fehler beim Abrufen der Aktienübersicht",
      error: error.message,
    });
  }
};
