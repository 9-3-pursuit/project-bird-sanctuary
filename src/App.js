import birdData from "./data/birds";

import Cart from "./components/Cart";
import BirdCard from "./components/BirdCard";
import Checkout from "./components/Checkout";

import { useState } from "react";

import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const resetCart = () => {
    setCart([]);
    setTotal(0);
    setDiscount(0);
  };

  const handleAdoptClick = (birdID) => {
    const birdFoundInData = birdData.find((bird) => bird.id === birdID);
    setTotal(total + birdFoundInData.amount);
    setCart([...cart, birdFoundInData]);
    if (cart.length > 2) {
      setDiscount();
    }
  };

  const handleDeleteClick = (birdID, birdIndex) => {
    const birdFoundInCart = cart.find((bird) => bird.id === birdID);
    const updatedCart = [...cart];

    updatedCart.splice(birdIndex, 1);
    setCart(updatedCart);
    setTotal(total - birdFoundInCart.amount);
    if (cart.length < 3) {
      setDiscount(0);
    }
  };

  return (
    <div>
      <h1>Bird Sanctuary Project!</h1>
    </div>
  );
};

export default App;
