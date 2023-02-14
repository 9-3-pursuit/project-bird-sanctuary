import BonusItems from "./BonusItems"

function Cart({cart, setMyCart}) {
 
    function removebird(index) {
         let temparray = cart.adopted
         temparray = temparray.filter((e,i) => i !== index)
         let tempdiscount = false
         
         let temptotal = temparray.map((x) => x.birdamount).reduce((a,b)=> a+b,0)
         if (temparray.length >= 3) {
            temptotal = temptotal * 0.9
            tempdiscount = true
         }    
         
         let newcart= {total: temptotal, discount: tempdiscount, adopted: temparray}
          setMyCart(newcart)
         
    }
   
    
    return(
        <div className='Cart'>
        <h2>Cart</h2>
        {cart.discount ? (<h3>Discount: 10%</h3>):(<h3>Discount: 0%</h3>)}
        <h4>Total: ${cart.total.toFixed(0)} </h4>
        <ol>
           {
            cart.adopted.map((bird,index) =>
                 (    
                    
                    <li key={index} className="Card">
                        {bird.birdname + " $" + bird.birdamount}
                        <button className="delbutton" onClick={() => removebird(index)}>❌</button>
                    </li>
                    
                    )
                    
            )
            
           }
        </ol>
        <p>Your donation has qualified for:</p>
         <BonusItems cart={cart}/>
       </div>
    );
}

export default Cart;