import React, { useEffect, useState } from "react";
import Charts from "../components/Charts";
import SidebarSingle from "../components/SidebarSingle";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const SinglePage = (stock) => {
  const [selectedStock, setSelectedStock] = useState(stock);

  const [oldPrice, setOldPrice] = useState(selectedStock.price); // merken des alten Preises

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStock((prevStock) => {
        const fluctuation = (Math.random() - 0.5) * 2; // ±1 €
        const newPrice = +(prevStock.price + fluctuation).toFixed(2);
        const percentChange = +(
          ((newPrice - prevStock.price) / prevStock.price) *
          100
        ).toFixed(2);

        setOldPrice(prevStock.price); // alten Preis merken

        return {
          ...prevStock,
          price: newPrice,
          change: percentChange,
        };
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const priceDiff = (selectedStock.price - oldPrice).toFixed(2);

  return (
    <div className="md:grid lg:grid-cols-[1fr_300px] w-full py-30 gap-30 ">
      <div className="gap-25 flex flex-col">
        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            {" "}
            <img
              src={stock.logo}
              alt=""
              className="h-[40px] w-fit pl-2 mb-10"
            />
            <button
              className="cursor-pointer mt-2"
              onClick={() => {
                setSelectedStock((prev) => ({
                  ...prev,
                  favorite: !prev.favorite,
                }));
                console.log("works");
              }}
            >
              {selectedStock.favorite === true ? (
                <MdFavorite size={25} />
              ) : (
                <MdFavoriteBorder size={25} />
              )}
            </button>
          </div>

          <h2>{stock.name}</h2>
          <span className="price">{stock.price} € </span>
          <span
            className={`font-bold text-xs ${
              stock.change > 0
                ? "text-green-500"
                : stock.change < 0
                ? "text-red-500"
                : "text-white"
            }`}
          >
            {priceDiff} € ({stock.change} %)
          </span>

          <Charts />
        </div>

        <div>
          <h3>Kennzahlen</h3>
          <div className="grid grid-cols-2 gap-15">
            <div className="flex flex-col gap-4">
              {stock.kpis.map((kpi) => (
                <div className="flex justify-between ">
                  <p>{kpi.title}</p>
                  <p className="text-white">{kpi.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 h-fit">
              {stock.daydetail.map((detail) => (
                <div className="flex justify-between">
                  <p>{detail.title}</p>
                  <p className="text-white">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3>Informationen</h3>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              {" "}
              {stock.categories.map((category) => (
                <span className="bg-black-200 font-bold text-black-900 text-[10px] px-3 py-1 rounded-xl">
                  {category}
                </span>
              ))}
            </div>
            <p className="text-white">{stock.description}</p>

            <div className="flex gap-20">
              <div>
                <p>ISIN</p>
                <p className="text-white">{stock.isin}</p>
              </div>
              <div>
                <p>WKN</p>
                <p className="text-white">{stock.wkn}</p>
              </div>
              <div>
                <p>Name</p>
                <p className="text-white">{stock.name}</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px]">
          Die angegebenen Kurse und die Renditeberechnung beziehen sich auf den
          unmittelbar vorhergehenden Geldkurs der Handelspartner der Trade
          Republic. Die Wertentwicklung in der Vergangenheit ist kein Indikator
          für zukünftige Ergebnisse. Die in der Preisübersicht aufgeführte
          Fremdkostenpauschale, Steuern oder weitere Kosten können die Rendite
          beeinflussen. Alle angezeigten Daten sind Indikationen, die aufgrund
          von Verbindungsverzögerungen veraltet sein können.
        </p>
      </div>

      <div className="relative ">
        <SidebarSingle />
      </div>
    </div>
  );
};

export default SinglePage;
