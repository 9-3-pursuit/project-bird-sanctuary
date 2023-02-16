
import BonusItems from "./bonusItems"

function Cart({cart, setMyCart}) {
 
    function removebird(index) {
         let birdArray = cart.adopted
         birdArray = birdArray.filter((e,i) => i !== index)
         let birdDiscount = false
         
         let birdTotal = birdArray.map((x) => x.birdamount).reduce((a,b)=> a+b,0)
         if (birdArray.length >= 3) {
          birdTotal *= 0.9
          birdDiscount = true
         }    
         
         let newBirdCart= {total: birdTotal, discount: birdDiscount , adopted: birdArray}
          setMyCart(newBirdCart)
         
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