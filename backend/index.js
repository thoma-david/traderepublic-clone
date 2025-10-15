const finnhub = require("finnhub");

const finnhubClient = new finnhub.DefaultApi(
  "d3npvmpr01qkgr8r992gd3npvmpr01qkgr8r9930"
); // Replace this

// Basic financials
finnhubClient.companyBasicFinancials(
  "AAPL",
  "margin",
  (error, data, response) => {
    console.log(data);
  }
);
