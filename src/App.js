import React, { useState } from 'react';
import BirdCard from './Components/BirdCard';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import data from './data/birds';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bird) => {
  setCart([...cart, { name: bird.name, amount: bird.amount, id: uuidv4() }]);
};

  

  const handleDelete = (id) => {
    setCart(cart.filter((bird) => bird.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <main className='card_container'>
        <header className='header_container'>
          <h1 className='title'>Bird Sanctuary</h1>
          </header>
        <div>
          <Checkout handleClearCart={handleClearCart} />
          <Cart setCart={handleAddToCart} cart={cart} handleDelete={handleDelete} />
        </div>
        <BirdCard data={data} setCart={handleAddToCart} />
      </main>
    </div>
  );
};

export default App;


