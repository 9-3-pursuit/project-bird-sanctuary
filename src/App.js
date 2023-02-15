import React from "react";
import BirdsAvailable from "./Components/BirdsAvailable";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenBirds: [],
    };
  }

  addToCart = (obj) => {
    this.setState({
      chosenBirds: [...this.state.chosenBirds, obj],
    });
  };

  removeFromCart = (bird) => {
    const { chosenBirds } = this.state;
    function removeItemOnce(arr, value) {
      const index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }
    this.setState({
      chosenBirds: removeItemOnce(chosenBirds, bird),
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    this.setState({
      chosenBirds: [],
    });
  };

  render() {
    const { chosenBirds } = this.state;
    return (
      <div>
        <h1>Welcome to the Bird Sanctuary</h1>
        <BirdsAvailable birds={birdData} addToCart={this.addToCart} />
        <Cart
          chosenBirds={chosenBirds}
          bonusItems={bonusItems}
          removeFromCart={this.removeFromCart}
        />
        <Checkout handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
