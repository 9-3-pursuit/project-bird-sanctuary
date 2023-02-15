import BirdsDisplay from "./Components/BirdsDisplay.js"
import birds from "./data/birds.js"
import Cart from "./Components/Carts.js"

import {useState} from "react";


function App () {
const[cart, setCart] = useState([])
const [total,setTotal] = useState(0)
const [discount, setDiscount] = useState(0)

  return (
    <div>
      <BirdsDisplay birds={birds} cart={cart} setCart={setCart}/>
      <Cart cart={cart} setCart={setCart}/>
    </div>
  );
};

export default App;
