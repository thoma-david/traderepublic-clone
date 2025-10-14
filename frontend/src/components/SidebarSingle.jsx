import React from "react";
import PutOrder from "./PutOrder";

const SidebarSingle = () => {
  return (
    <div className="flex flex-col space-between gap-20 h-screen fixed w-auto max-w-[300px] py-10">
      <PutOrder />

      <div>
        <h3>
          Investiere regelmäßig ein paar Euro und beobachte, wie Dein Geld
          wächst.
        </h3>
        <p>
          Sparplan sind für immer kostenlos. Sie können es jederzeit bearbeiten
          oder löschen.
        </p>
        <button className="secondary-btn">Erstellen</button>
      </div>
    </div>
  );
};

export default SidebarSingle;
