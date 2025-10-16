import express from "express";
import dotenv from "dotenv";

dotenv.config();
console.log("Geladener API Key:", process.env.FINNHUB_API_KEY);

// Importiere deine Routen
import stocksRoutes from "./routes/stocksRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // JSON-Parsing für POST-Requests

// API-Routen registrieren
app.use("/api/stocks", stocksRoutes);

// Start des Servers
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
