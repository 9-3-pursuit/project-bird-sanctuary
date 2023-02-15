import birdData from "./data/birds";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import BirdCard from "./components/BirdCard";
import Checkout from "./components/Checkout";

import bonusItems from "./data/bonusItems";

import { useState, useEffect } from "react";

import "./styles/App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonusItemsList, setBonusItemsList] = useState([]);

  useEffect(() => {
    if (cart.length >= 3) {
      setDiscount(10);
    }

    // unexpected behavior was cause by ifElse statements because of the use of state.
    // ifElse statements are not reactive to state changes.
    // in react, we use conditional rendering instead of ifElse statements.
    // ifElse statements are used in vanilla JS.
    if (total >= 100) {
      setBonusItemsList(bonusItems.slice(0, 1));
    }
    if (total >= 300) {
      setBonusItemsList(bonusItems.slice(0, 2));
    }
    if (total >= 500) {
      setBonusItemsList(bonusItems.slice(0, 3));
    }
    if (total >= 1000) {
      setBonusItemsList(bonusItems.slice(0, 4));
    }
  }, [cart, total, discount]);

  const resetCart = () => {
    setCart([]);
    setTotal(0);
    setDiscount(0);
    setBonusItemsList([]);
  };

  const handleAdoptClick = (birdID) => {
    const birdFoundInData = birdData.find((bird) => bird.id === birdID);
    setTotal(total + birdFoundInData.amount);
    setCart([...cart, birdFoundInData]);
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
    <div className="priority-container">
      <NavBar />
      <div className="main-container">
        <div className="side-bar">
          <Cart cart={cart} total={total} discount={discount} handleDeleteClick={handleDeleteClick} bonusItemsList={bonusItemsList} />
          <br />
          <Checkout resetCart={resetCart} />
        </div>
        <div className="birds">
          {birdData.map((bird) => {
            return <BirdCard bird={bird} handleAdoptClick={handleAdoptClick} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
// When I 'Harold F.' get a 6-figure job, I will take out
// Diandre
// Vandhana
// Keannu
// Ryan Lundy
