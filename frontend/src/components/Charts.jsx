import React from "react";
import { useState } from "react";
import { chartFilters } from "../constants";
import placeholder from "../assets/placeholder.png"; // Schritt 1: Import verwenden

const Charts = () => {
  const [activeFilter, setActiveFilter] = useState(chartFilters[0]);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex gap-5 my-10">
        {chartFilters.map((filter) => (
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
      <div className="w-full h-full overflow-hidden ">
        <img src={placeholder} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default Charts;
