import React from "react";
import Carrusel from "./carrusel";
import Body from "./body";

function Home() {
  return (
    <div>
      <Carrusel />
      <div className="text-center">
        <h1 className="upper-title">Vive</h1>
        <small className="lower-title fs-2">Nuestras experiencias</small>
      </div>
      <Body />
    </div>
  );
}

export default Home;
