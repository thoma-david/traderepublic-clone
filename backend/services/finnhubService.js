import finnhubClient from "../config/connectFinnhub.cjs";

export async function getCompanyFinancials(symbol, metric = "margin") {
  try {
    const response = await finnhubClient.get("/stock/metric", {
      params: { symbol, metric },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getStockQuote(symbol) {
  try {
    const response = await finnhubClient.get("/quote", {
      params: { symbol },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCompanyProfile(symbol) {
  try {
    const response = await finnhubClient.get("/stock/profile2", {
      params: { symbol },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getStockOverview(symbol) {
  try {
    // Fetch profile and quote in parallel
    const [profile, quote] = await Promise.all([
      getCompanyProfile(symbol),
      getStockQuote(symbol),
    ]);

    return {
      symbol: symbol,
      name: profile.name || symbol,
      logo: profile.logo || null,
      currency: profile.currency || "USD",
      exchange: profile.exchange || null,
      currentPrice: quote.c,
      change: quote.d,
      changePercent: quote.dp,
      high: quote.h,
      low: quote.l,
      open: quote.o,
      previousClose: quote.pc,
    };
  } catch (error) {
    console.error(`Error fetching overview for ${symbol}:`, error.message);
    // Return partial data even if there's an error
    return {
      symbol: symbol,
      name: symbol,
      logo: null,
      currency: "USD",
      exchange: null,
      currentPrice: 0,
      change: 0,
      changePercent: 0,
      high: 0,
      low: 0,
      open: 0,
      previousClose: 0,
      error: error.message,
    };
  }
}
