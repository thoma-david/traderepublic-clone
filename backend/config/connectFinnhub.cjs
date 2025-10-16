require("dotenv").config();
const axios = require("axios");

const apiKey = process.env.FINNHUB_API_KEY;
const baseURL = "https://finnhub.io/api/v1";

// Erstelle einen Axios-Client mit dem API Key
const finnhubClient = axios.create({
  baseURL: baseURL,
  params: {
    token: apiKey,
  },
});

module.exports = finnhubClient;
