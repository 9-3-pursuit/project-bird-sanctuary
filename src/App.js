import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";
import birdData from "./data/birds";
import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted");
  }

  function handleAddToCart({ name, amount, id }) {
    setList([...list, { name, amount, id }]);
    setTotal(total + amount);
  }

  return (
    <main>
      <Cart />
      <Checkout />
      <div className="bird-section">
        {birdData.map(({ name, img, amount, id }) => (
          <BirdCard name={name} img={img} amount={amount} key={id} />
        ))}
      </div>
    </main>
  );
}

export default App;
