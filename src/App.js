import { useState } from "react";
import "./App.css";
import data from "./birds.js";
import birdList from "./BirdCard.js";


function App () {
  const [birds, setBirds ] = useState(data);
  return (
    <main>
      <div className="App">
        <birdList birds = {birds} />
        <button onClick = {() => console.log('you clicked me')}>Adopt</button>
      
      </div>

    </main>
    
  );
};

export default App;
