/*           Components           */
import BirdCard from "./Components/BirdCard/BirdCard";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
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
    <main className={currentMode}>
      <Header>
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
