// * all needed imported files --v
import { useState } from "react";
import Card from "./data/birdCard.js";
import Cart from "./data/birdCart.js";
import Checkout from "./data/birdCheckout.js";
import "./App.css"

function App() {
  // * all states used --v
  const [discount, setDiscount] = useState(false)
  const [cart, setCart] = useState([]) 
  const [total, setTotal] = useState(0)

// * all desired props hooked --v
  return (
    <div className="main">
      <h1>The Bird Sanctuary🪶</h1>
      <Cart discount={discount} total={total} cart={cart} setCart={setCart} setTotal={setTotal} setDiscount={setDiscount} />
      <Checkout cart={cart} setCart={setCart} />
      <Card cart={cart} total={total} setTotal={setTotal} setDiscount={setDiscount} />

    </div>

  );
};

export default App;
