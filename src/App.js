/*           Components           */
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import BirdSection from "./Components/BirdCard/BirdSection";
/*         Data, State, CSS        */
import { cartReducer, INITIAL_STATE } from "./data/cartReducer";
import { ModeContext, CartDispatchContext } from "./data/modeContext";
import { useReducer, useState } from "react";
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
          <BirdSection />
        </main>
      </CartDispatchContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
