import BirdInfo from "./BirdInfo";
import birdData from "./data/birds";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const birdCollection = birdData.map((bird) => {
    return (
      <div className="card">
        <BirdInfo {...bird} key={bird.id} {...setCart} />
        <button
          onClick={function updateCart(e) {
            setCart([...cart, bird]);
          }}
        >
          Adopt
        </button>
      </div>
    );
  });
  return (
    <>
      <section className="cartSection">
        <Cart selected={cart} />
      </section>
      <section className="birds">{birdCollection}</section>
    </>
  );
}

export default App;
