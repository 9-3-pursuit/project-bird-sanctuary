/*           Components           */
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
/*         CSS, Data, State         */
import birdData from "./data/birds";
import { useState } from "react";
import "./App.css";

function App() {
  console.log();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setList([]);
    setTotal(0);
  }

  function handleAddToCart({ name, amount, id }) {
    setList([...list, { name, amount, id }]);
    setTotal(total + amount);
  }

  function handleRemoveFromCar(e, amount) {
    let newList = list.filter(({ id }) => id !== e.target.parentNode.id);
    setList(newList);
    setTotal(total - amount);
  }

  return (
    <main>
      <Cart list={list} total={total} onClick={handleRemoveFromCar} />
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
