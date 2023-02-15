import React from "react";
import data from "./data/birds";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { useState } from "react";

function App () {
  const [queue, setQueue] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [cart, setCart] = useState({total: 0, discount: false, adopted:[]});
  const [total, setTotal] = useState(0);
  function click (bird) {
    setTotal(total + bird.amount)
  };
  return (
    <main>
      <div>
        <Cart queue={queue} discount={discount} setQueue={setQueue} setDiscount={setDiscount} cart={cart} setCart={setCart}/>
        <Checkout  setQueue={setQueue} setDiscount={setDiscount} />
      </div>
        <BirdCard queue={queue} setQueue={setQueue} setDiscount={setDiscount} data={data} click={click}/>
    </main>
  );
};

export default App;
