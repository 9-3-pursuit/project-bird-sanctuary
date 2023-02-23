import BirdCard from "./components/BirdCard"
import Cart from "./components/Cart"
import Checkout from "./component/Checkout"
import Birds from "./data/Birds"
import "./App.css"

function App () {
  const birdCards = [
    <li>
    <BirdCard bird={birds[0]} />
    </li>,
    <li>
    <BirdCard bird={birds[1]} />
    </li>,
    <li>
    <BirdCard bird={birds[2]} />
    </li>,
    <li>
    <BirdCard bird={birds[3]} />
    </li>,
    <li>
    <BirdCard bird={birds[4]} />
    </li>,
    <li>
    <BirdCard bird={birds[5]} />
    </li>,
    <li>
    <BirdCard bird={birds[6]} />
    </li>,
    <li>
    <BirdCard bird={birds[7]} />
    </li>,
    <li>
    <BirdCard bird={birds[8]} />
    </li>,
    <li>
    <BirdCard bird={birds[9]} />
    </li>
    
  ]
  return (
    <div className="App">
    <Cart />
    <Checkout />
    <h1>Welcome to the Bird Sanctuary</h1>
    <ul className="Birds">
    {birdCards}
    
    </ul>
    </div>
    );
  };

export default App;
