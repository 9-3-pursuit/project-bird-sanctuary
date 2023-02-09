import { useState } from "react";
import birdData from "./data/birds";
import Birdcard from "./Components/Birdcard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App () {
  return (
    <div>
      <aside>
        <Cart />
        <Checkout />
      </aside>
      <Birdcard />
    </div>
  );
};

export default App;
