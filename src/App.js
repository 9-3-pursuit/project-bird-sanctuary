import { useState } from "react";
import birdData from "./data/birds";
import Header from "./Components/Header";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(addedBird) {
    setCartItems([...cartItems, addedBird]);
    setTotal(total + addedBird.amount);
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert("You have adopted birds. Thank you!")
    setTotal(0);
    setCartItems([]);
  }

  function deleteBird(event) {
    let updatedBirds = [...cartItems];
    updatedBirds.splice(event.target.id, 1)
    setCartItems(updatedBirds);
  }




  return (
    <div className="App">
      <Header />
      <main>
        <Cart setCartItems={setCartItems} cartItems={cartItems} total={total} bonusItems={bonusItems} deleteBird={deleteBird} />
        <BirdCards addToCart={addToCart} birds={birds} />
        <Checkout handleSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default App;
