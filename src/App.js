import { useState } from "react";
import "./App.css";

// components
import BirdsList from "./components/BirdsList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="app-container">
      <div className="cart-wrapper">
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        <Checkout setCartItems={setCartItems} />
      </div>
      <div className="birds-wrapper">
        <div className="birds">
          <BirdsList setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
