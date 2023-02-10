import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";
import birdData from "./data/birds";

function App() {
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
