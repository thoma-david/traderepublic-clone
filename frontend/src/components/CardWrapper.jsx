import Card from "./Card";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardWrapper = ({ categories }) => {
  const [stocks, setStocks] = useState(categories.stocks);

  useEffect(() => {
    // Change with Fetch when Backend finished

    const interval = setInterval(() => {
      setStocks((currentStocks) =>
        currentStocks.map((stock) => ({
          ...stock,
          change: parseFloat(
            (stock.change + (Math.random() - 0.5) * 5).toFixed(2)
          ),
        }))
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Stocks sortieren (absteigend nach change)
  const sortedStocks = [...stocks].sort((a, b) => b.change - a.change);

  return (
    <div>
      <h3>{categories.title}</h3>
      <div className="grid grid-cols-5 gap-4">
        {sortedStocks.map((stock, index) => (
          <Link to={`/instrument/${stock.name}`} key={index}>
            <Card name={stock.name} logo={stock.logo} change={stock.change} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
