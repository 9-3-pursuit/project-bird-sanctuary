import { useState } from "react";
import birdData from "./data/birds";
import Header from "./Components/Header";
import BirdCards from "./Components/BirdCards";

function App() {
  const [birds, setBirds] = useState(birdData);

  return (
    <div className="App">
      <Header />
      <main>
        <BirdCards birds={birds} />
      </main>
    </div>
  );
};

export default App;
