import { useState } from "react";
import birdData from "./data/birds";
import Birdcard from "./Components/Birdcard";
import Cart from "./Components/Cart";
import CheckoutForm from "./Components/CheckoutForm";

function App () {

  const [cartQueue, setCartQueue] = useState([]) 

  return (
    <main>
      <aside>
        <Cart cartQueue={cartQueue} setCartQueue={setCartQueue} />
        <CheckoutForm />
      </aside>
      <Birdcard birdData={birdData} cartQueue={cartQueue} setCartQueue={setCartQueue} />
    </main>
  );
};

export default App;
