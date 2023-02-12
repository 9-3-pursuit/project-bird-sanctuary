import birdData from "./data/birds";

import Cart from "./components/Cart";
import BirdCard from "./components/BirdCard";
import Checkout from "./components/Checkout";

import { useState, useEffect } from "react";

import "./styles/App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    console.log(cart.length);
    if (cart.length >= 3) {
      setDiscount(10);
    }
  }, [cart, discount]);

  const resetCart = () => {
    setCart([]);
    setTotal(0);
    setDiscount(0);
  };

  const handleAdoptClick = (birdID) => {
    console.log(cart.length);
    const birdFoundInData = birdData.find((bird) => bird.id === birdID);
    setTotal(total + birdFoundInData.amount);
    setCart([...cart, birdFoundInData]);
    // if (cart.length >= 3) {
    //   setDiscount(10);
    // }
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
    <div className="main-container">
      <div className="side-bar">
        <Cart cart={cart} total={total} discount={discount} handleDeleteClick={handleDeleteClick} />
        <br />
        <Checkout resetCart={resetCart} />
      </div>
      <div className="birds">
        {birdData.map((bird) => {
          return <BirdCard bird={bird} handleAdoptClick={handleAdoptClick} />;
        })}
      </div>
    </div>
  );
};
export default App;
