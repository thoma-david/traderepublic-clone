import React, { useState } from "react";

const Profile = () => {
  const transactionFilters = ["Investments", "Einnahmen", "Ausgaben"];
  const [activeFilter, setActiveFilter] = useState(transactionFilters[0]);

  return (
    <div className="md:grid lg:grid-cols-[1fr_300px] w-full py-30 gap-30 ">
      <div className="gap-10 flex flex-col">
        <h2>Profile</h2>
        <div className="flex gap-5 my-10">
          {transactionFilters.map((filter) => (
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
          {/* MAP ALL TRANSACTIONS */}
        </div>
        <div>
          <h3>August</h3>
          <div>
            <div className="flex justify-between w-full  items-center ">
              <div className="flex gap-4 items-center ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/763px-Starbucks_Corporation_Logo_2011.svg.png"
                  alt=""
                  className="w-[35px] mb-1"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Starbucks</span>
                  <div className="flex gap-2 ">
                    <p>104,00€</p> <p>gesendet</p>
                  </div>
                </div>
              </div>
              <span className="font-bold">4,00€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
