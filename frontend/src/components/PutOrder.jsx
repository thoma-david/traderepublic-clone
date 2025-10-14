import React, { useDebugValue } from "react";
import { userx } from "../constants/account";
import { stockPayFilters } from "../constants";
import { useState } from "react";
import { stock } from "../constants/account";

const PutOrder = () => {
  const [activeFilter, setActiveFilter] = useState(stockPayFilters[0]);

  return (
    <div>
      <div>
        <h3 className="mb-4">Kaufen</h3>
        <p>{userx.budget}€ verfügbar</p>
      </div>

      <div>
        <div className="flex gap-5 my-10 ">
          {stockPayFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-2 py-1 rounded text-xs cursor-pointer ${
                activeFilter === filter ? "bg-black-200 text-white" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {activeFilter === stockPayFilters[0] ? (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>Betrag</p>
              <p>{stock.price}</p>
            </div>
            <div className="flex justify-between">
              <p>Aktien</p>
              <p>{stock.price}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between ">
              <p>Anzahl</p>
              <p>0</p>
            </div>
            <div className="flex justify-between">
              <p>Marktpreis</p>
              <p>{stock.price}€</p>
            </div>
            <div className="flex justify-between">
              <p>Summe(indiaktiv)</p>
              <p>{stock.price}€</p>
            </div>
          </div>
        )}
        <button className="inactive-btn">Order Überprüfen</button>
      </div>
    </div>
  );
};

export default PutOrder;
