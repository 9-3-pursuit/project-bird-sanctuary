/*           Components           */
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
/*         Data, State, CSS        */
import birdData from "./data/birds";
// import ModeContext from "./data/modeContext";
import { useReducer, useContext, useState } from "react";
import { cartReducer, INITIAL_STATE } from "./data/cartReducer";
import "./App.css";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const [isDark, setDark] = useState(false);

  return (
    <main>
      <Cart cart={cart} dispatch={dispatch} />
      <Checkout dispatch={dispatch} />
      <div className="bird-section">
        {birdData.map((bird) => (
          <BirdCard key={bird.id} bird={bird} dispatch={dispatch} />
        ))}
      </div>
    </main>
  );
}

export default App;
