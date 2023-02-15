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
  const [birdCart, setBirdCart] = useState([]);
  const [discount, setDiscount] = useState(false);
  const [bonusItems, setBonusItems] = useState({})

  //addToCart excepts a birdobj and uses setCart to update the cart
  // function addToCart(birdToAdd) {
  //   setBirdCart([...birdCart, birdToAdd])
  // }

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
