import { useState } from "react";
import birdData from "./data/birds.js";
import Checkout from "./Components/Checkout.js"
import Birds from "./Components/Birds.js";
import Cart from "./Components/Cart.js";


function App () {

  const [cartQueue, setCartQueue] = useState([]) 
  const [discount, setDiscount] = useState(0);


   return (
      <main>
          <div>
            <Cart cartQueue={cartQueue} discount={discount} setCartQueue={setCartQueue} setDiscount={setDiscount} />
            <Checkout  setCartQueue={setCartQueue} setDiscount={setDiscount} />
          </div>
            <Birds birdData={birdData} cartQueue={cartQueue} setCartQueue={setCartQueue} setDiscount={setDiscount}/>
    </main>
  );
};

export default App;

