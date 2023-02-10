import React from "react";
import { useState } from "react";
import AllBirds from "./Components/Allbirds";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems"
// import "./index.css";
// import ".App.css";

function App() {

  return (
    <div>
      <AllBirds birdData={birdData} />;
      <main className="container">
        <section className="sidebar"><Checkout />
        </section>
        <section className="cart"><Cart birdData={birdData} />
        </section >

      </main>
    </div>
  );
};

export default App;
