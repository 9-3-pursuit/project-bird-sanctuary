import { useState } from "react";
import birdData from "./data/birds";
import Birdcard from "./Components/Birdcard";
import Cart from "./Components/Cart";
import CheckoutForm from "./Components/CheckoutForm";

function App () {
  const [discount, setDiscount] = useState(0);
  const [cartQueue, setCartQueue] = useState([]) 
  

  return (
    <main>
      <aside>
        <Cart cartQueue={cartQueue} discount={discount} setCartQueue={setCartQueue} setDiscount={setDiscount} />
        <CheckoutForm setCartQueue={setCartQueue} setDiscount={setDiscount} />
      </aside>
      <Birdcard 
        birdData={birdData} 
        cartQueue={cartQueue} 
        setCartQueue={setCartQueue}
        setDiscount={setDiscount}
      />
    </main>
  );
};

export default App;
