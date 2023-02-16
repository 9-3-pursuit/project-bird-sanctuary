/*           Components           */
import BirdCard from "./Components/BirdCard/BirdCard";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
/*         Data, State, CSS        */
import birdData from "./data/birds";
import { ModeContext, CartDispatchContext } from "./data/modeContext";
import { useReducer, useState } from "react";
import { cartReducer, INITIAL_STATE } from "./data/cartReducer";
import "./App.css";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const [isDark, setDark] = useState(false);

  const currentMode = isDark ? "dark" : "light";

  return (
    <ModeContext.Provider value={currentMode}>
      <CartDispatchContext.Provider value={dispatch}>
        <main className={currentMode}>
          <Header setDark={setDark} />
          <Cart cart={cart} />
          <Checkout />
          <div className="bird-section">
            {birdData.map((bird) => (
              <BirdCard key={bird.id} bird={bird} />
            ))}
          </div>
        </main>
      </CartDispatchContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
