/*           Components           */
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
/*         CSS, Data, State         */
import birdData from "./data/birds";
import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState({
    list: [],
    total: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setCart({
      list: [],
      total: 0,
    });
  }

  function handleAddToCart({ name, amount, id }) {
    const { total, list } = cart;
    setCart({
      list: [...list, { name, amount, id }],
      total: total + amount,
    });
  }

  function handleRemoveFromCart(e, amount) {
    const { total, list } = cart;
    let newList = list.filter(({ id }) => id !== e.target.parentNode.id);
    setCart({
      list: newList,
      total: total - amount,
    });
  }

  return (
    <main>
      <Cart cart={cart} onClick={handleRemoveFromCart} />
      <Checkout onSubmit={handleSubmit} />
      <div className="bird-section">
        {birdData.map(({ name, img, amount, id }) => (
          <BirdCard
            name={name}
            img={img}
            amount={amount}
            id={id}
            key={id}
            onClick={handleAddToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
