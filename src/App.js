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
  const [total, setTotal] = useState(0);
  const [birdCart, setBirdCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [bonusItems, setBonusItems] = useState({})
  return (
    <div>
      <AllBirds birdData={birdData} setBirdCart={setBirdCart} birdCart={birdCart} />;
      <main className="container">
        <section className="sidebar"><Checkout />
        </section>
        <section className="cart"><Cart birdCart={birdCart} discount={discount} />
        </section >
      </main>
    </div>
  );
};

export default App;
