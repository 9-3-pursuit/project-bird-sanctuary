import { useState } from "react";
import Card from "./data/birdCard.js";
import Cart from "./data/birdCart.js";
// import Checkout from "./data/birdCheckout.js";
// import birdArr from "./data/birds.js";
// import bonus from "./data/bonusItems.js"
// import "./App.css"

function App() {
  const [discount, setDiscount] = useState(false)
  const [cart, setCart] = useState([]) // * state var. for cart
  const [total, setTotal] = useState(0)
  //   const [customer, setCustomerInfo] = useState({
  //     firstName: " ",
  //     lastName: " ",
  //     email: " ",
  //     zipcode: " ",
  // })

  // ! possibly add a create event on here to pass into card.js file

  // const [newBird, setNewBird] = useState(birdArr)

  //  const [newBird, setNewBird]=useState(0)
  // const [checkout, setCheckout] = useState() // * state var. for checkout
  // const [discount, setDiscount] = useState() // * state var. for discounts
  // const [bonus, setBonus] = useState(10)
  // const [bird,setBirdInfo]=useState(birdInput)


  // function addBird({newBird, setNewBird}){
  //   // const [newBird, setNewBird]=useState(0)
  //   const currentBird = cart.find((info)=>info.id === info.id)
  //   if(currentBird){
  //     return alert("Bird is already added to cart")
  //   } else{
  //     setNewBird(cart + newBird.amount)
  //     setCart([...cart,cardBird])

  //   }
  // }

  // function setCard(bird){
  //   const newCart = [... cart]
  //   newCart.push(bird)
  //   setCart(newCart)
  // }
  // function clearedBird(noBird){
  //   const newCart= [...cart]
  //   newCart.splice(noBird,1)
  //   setCart(newCart)
  // }
  // function resetCart(){
  //   setCart([])
  // }
  // function newBird(birdId) {
  //   if(cart.some(bird => bird.id===birdId)) {
  //     alert("Bird is already in the cart")
  //   } else {
  //     const theBird = cardBird.find(bird=> bird.id=== birdId)
  //     setCart([...cart, theBird])
  //   }
  // }

  // function resetBirdForm() { // * reset of form 
  //   setCustomerInfo({
  //       firstName: " ",
  //       lastName: " ",
  //       email: " ",
  //       zipcode: " ",
  //   })

  // }

  return (
    <div className="main">
      <h1>The Bird Sanctuary🪶</h1>
      <Cart discount={discount}  total={total}  cart={cart} setCart={setCart} setTotal={setTotal} setDiscount={setDiscount}  />
      {/* <Checkout checkout={Checkout} customer={customer} resetBirdForm={resetBirdForm} setCustomerInfo={setCustomerInfo} /> */}
      <Card cart={cart} total={total} setTotal={setTotal} setDiscount={setDiscount} />
      <Bonus />
    </div>

  );
};

export default App;
