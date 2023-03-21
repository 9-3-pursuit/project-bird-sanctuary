import BirdsDisplay from "./Components/BirdsDisplay.js";
import birds from "./data/birds.js";
import Cart from "./Components/Cart.js";
import Checkout from "./Components/Checkout.js";

import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  // will be an empty array
  const [total, setTotal] = useState(0);
  // will be a number to set total for cart price
  const [discount, setDiscount] = useState(0);
  // will be a number

  return (
    <div>
      <BirdsDisplay birds={birds} cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} discount={discount} />
      <Checkout className="sidebar" />
    </div>
  );
}

export default App;
