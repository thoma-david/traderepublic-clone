import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-between gap-20 h-screen fixed w-auto max-w-[300px] py-10">
      <div>
        <h3>Investiere jetzt und entdecke neue Ideen</h3>
        <p>
          Nutze unsere Suchfunktion, um das Investment deiner Wahl zu finden.
        </p>
        <button>Wertpapiere Entdecken </button>
      </div>
      <div>
        <h3>Investments</h3>
        <p>Hier siehst du eine Übersicht aller deiner Investments.</p>
      </div>
      <div>
        <h3>Folge ich</h3>
        <p>Favoriten</p>
      </div>
    </div>
  );
};

export default Sidebar;
