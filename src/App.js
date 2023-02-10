import birdData from "./data/birds";
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";



function App () {
  const birdsArr = birdData
  return (
    <div>
      <Cart/>
      <Checkout/>
      <BirdCards birdsArr={birdsArr}/>
    </div>
  );
};

export default App;
