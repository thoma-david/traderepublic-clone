import React from "react";
import Sidebar from "../components/Sidebar";
import Charts from "../components/Charts";
import CardWrapper from "../components/CardWrapper";
import { categories } from "../constants";

const Dashboard = () => {
  return (
    <div className="md:grid lg:grid-cols-[1fr_300px] w-full py-30 gap-30 ">
      <div className="gap-25 flex flex-col">
        <div>
          <h2>Portfolio </h2>
          <span className="price">0,00 € </span>
          <Charts />
        </div>
        <div>
          <h2>Entdecken</h2>
          <div className="flex flex-col gap-20">
            {categories.map((category) => (
              <CardWrapper categories={category} />
            ))}
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
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
