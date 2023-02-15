/*           Components           */
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
/*         Data, State, CSS        */
import birdData from "./data/birds";
import { useReducer } from "react";
import { cartReducer, INITIAL_STATE } from "./cartReducer";
import "./App.css";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  function handleSubmit(e) {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    dispatch({ type: "submitted" });
  }

  function handleRemoveFromCart(e, amount) {
    const listWithItemFiltered = cart.list.filter(
      ({ id }) => id !== e.target.parentNode.id
    );
    dispatch({
      type: "removed",
      listWithItemFiltered: listWithItemFiltered,
      amount: amount,
    });
  }

  return (
    <main>
      <Cart cart={cart} onClick={handleRemoveFromCart} />
      <Checkout onSubmit={handleSubmit} />
      <div className="bird-section">
        {birdData.map((bird) => (
          <BirdCard key={bird.id} bird={bird} onClick={handleAddToCart} />
        ))}
      </div>
    </main>
  );
}

export default App;
