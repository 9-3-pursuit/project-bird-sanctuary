import birds from "./data/birds"
import BirdCards from "./Components/BirdCards"
import Checkout from "./Components/Checkout"
import Cart from "./Components/Cart"
import "./App.css"
import { useState } from "react"


export default function App () {
  const [items, setCartItems] = useState([])
  const [discount, setDiscount] = useState(0)

  return (
    <main>
      <div className="row-one">
        <Cart 
          items={items}
          discount={discount}
          setDiscount={setDiscount}
          setCartItems={setCartItems}
        />
        <Checkout 
          setDiscount={setDiscount}
          setCartItems={setCartItems}
          discount={discount}
        />
      </div>
      <BirdCards 
        birds={birds}
        items={items}
        setCartItems={setCartItems}
      />
    </main>
  );
};


