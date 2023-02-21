import Card from "./components/card";
import Cart from "./components/cart";
import birds from "./data/birds";
import bonusItems from "./data/bonusItems";
import "./App.css";
import { useState,useEffect } from "react";

function App () {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [checkoutForm, setCheckOut] = useState({firstname:"",lastname:"",email:"",zipcode:""})
  
  const onSubmit = (event) =>{
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    onReset();
  }
  const onReset = () =>{
    setTotal(0);
    setCart([]);
    setBonus([]);
    setDiscount([]);
  }
  const onCheckoutFormChange = (event) =>{
    setCheckOut(preD => ({...preD, [event.target.name] : event.target.value }));
  }
  const addItem = (item) => {
    setCart( preD => preD.concat(item));
  }
  const deleteFromCart = (ids) =>{
    cart.splice(ids,1);
    setCart([...cart]);
  }
  //////////////////////////////////////////////
  useEffect(() => {
    const num= (min,max,cv) => cv>=min && cv<=max;
    //////////////////////////////////////////////
    setDiscount(cart.length>=3 ? 10 : 0);
    let sumAmount = cart.reduce((acc,cv)=>acc+cv.amount,0);
    let bonusReset;
    if(num(100 ,300,     sumAmount)) bonusReset = 1;
    if(num(300 ,500,     sumAmount)) bonusReset = 2;
    if(num(500 ,1000,    sumAmount)) bonusReset = 3;
    if(num(1000,Infinity,sumAmount)) bonusReset = 4;
    if(bonusReset) {
      setBonus( bonusItems.slice(0,bonusReset));
    }
    else{
      setBonus([]);
    }
    setTotal( sumAmount );
  }, [cart]);

  return (
<div className="container">
      <div className="sidebar">
        <Cart bonus={bonus} total={total} discount={discount} cart={cart} deleteFromCart={deleteFromCart}/>
        <hr></hr>
        <div className="Checkout">
          <h2>Checkout</h2>
          <form onSubmit={onSubmit}>
            <label>
              <div>First Name</div>
              <input name="firstname" value={checkoutForm.firstname} onChange={onCheckoutFormChange}/>
            </label>
            <label>
              <div>Last Name</div>
              <input name="lastname" value={checkoutForm.lastname} onChange={onCheckoutFormChange}/>
            </label>
            <label>
              <div>Email</div>
              <input name="email" value={checkoutForm.email} onChange={onCheckoutFormChange}/>
            </label>
            <label>
              <div>Zip Code</div>
              <input name="zipcode" value={checkoutForm.zipcode} onChange={onCheckoutFormChange}/>
            </label>
            <input type="submit"/>
          </form>
        </div>
      </div>
      {/* /////////////////////// */}
      <div className="birds">
        {birds.map(el=> <Card key={el.id} bird={el} updateCart={addItem}/> )}
      </div>
    

    </div>
  );
};

export default App;
