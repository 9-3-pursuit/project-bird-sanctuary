/*           Components           */
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
/*         Data, State, CSS        */
import birdData from "./data/birds";
// import ModeContext from "./data/modeContext";
import { useReducer, useState } from "react";
import { cartReducer, INITIAL_STATE } from "./data/cartReducer";
import "./App.css";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const [isDark, setDark] = useState(false);

  const currentMode = isDark ? "dark" : "light";

  return (
    <main>
      <header>
        <h1>Ari's Bird Sanctuary</h1>
      </header>
      <Cart cart={cart} dispatch={dispatch} isDark currentMode={currentMode} />
      <Checkout dispatch={dispatch} currentMode={currentMode} />
      <div className="bird-section">
        {birdData.map((bird) => (
          <BirdCard
            key={bird.id}
            bird={bird}
            dispatch={dispatch}
            currentMode={currentMode}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
