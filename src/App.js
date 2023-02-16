import { useState } from "react";
import birdData from "./data/birds";
import Birdcard from "./Components/Birdcard";
import Cart from "./Components/Cart";
import CheckoutForm from "./Components/CheckoutForm";

function App () {
  const [cartQueue, setCartQueue] = useState([]) 
  let discount = 0

  if (cartQueue.length >= 3) {
    discount = 10
  } else {
    discount = 0
  }

  return (
    <main>
      <aside>
        <Cart cartQueue={cartQueue} discount={discount} setCartQueue={setCartQueue}  />
        <CheckoutForm setCartQueue={setCartQueue} discount={discount} />
      </aside>
      <Birdcard 
        birdData={birdData} 
        cartQueue={cartQueue} 
        setCartQueue={setCartQueue}
      />
    </main>
  );
};

export default App;
