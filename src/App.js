import { useState } from "react";
import Card from "./data/birdCard.js";
import Cart from "./data/birdCart.js";
import Checkout from "./data/birdCheckout.js";
import birdArr from "./data/birds.js";
import bonus from "./data/bonusItems.js"

// ! for 2/12-> 
// start checkout js []
// fix up cart js file []
// manage the bonus items being imported from js []

// import bonusItems from "./bonusItems.js";
function App() {
  const [card, setCard] = useState() // * state var. for card
  const [cart, setCart] = useState([]) // * state var. for cart
  // const [checkout, setCheckout] = useState() // * state var. for checkout


  // const [discount, setDiscount] = useState() // * state var. for discounts
  // const [bonus, setBonus] = useState(10)
  // const [bird,setBirdInfo]=useState(birdInput)

  // function handleSelectBird(event) { // * handle for bird options
  //  if(!card || !checkout){
  //     setCart(true)
  //     return setCart(`You have adopted birds. Thank you!`)
  //     console.log(setCart)
  //   }
  //   if(card.includes(event)){
  //   alert(`Bird already added to cart`)
  //   } 



  //  }

  // function handleSubmit(event) { // * handle for submit button
  //   event.preventDefault();
  //   alert(`You have adopted birds. Thank you!`);
  //   resetBirdForm();
  //   // if(!card || !checkout){
  //   //   setCart(true)
  //   //   return setCart(`You have adopted birds. Thank you!`)
  //   //   console.log(setCart)
  //   // }
  // }
  // function resetBirdForm() { // ! this might be changed to a cart reset not card reset(?)
  //   setCard([])
  // }


  return (
    <div className="main">
      <h1>The Bird Sanctuary🪶</h1>
      <Cart birdCart={Cart} cart={cart} setCart={setCart} bonus={bonus}/>
      <Checkout checkout={Checkout}/> 
      <Card setCard={setCard} birdInfo={birdArr} />
      {/* <Bonus bonus={Bonus} /> */}
    </div>

  );
};

export default App;
