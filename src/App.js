import { useState } from "react";
import birdData from "./data/birds";
import Birdcard from "./Components/Birdcard";
import Cart from "./Components/Cart";
import CheckoutForm from "./Components/CheckoutForm";

function App () {
  return (
    <main>
      <aside>
        <Cart />
        <CheckoutForm />
      </aside>
      <Birdcard />
    </main>
  );
};

export default App;
