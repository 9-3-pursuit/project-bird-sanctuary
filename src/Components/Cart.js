import bonusItems from "../data/bonusItems"

 function Cart({cart, setCart}) {
     let tempArr = cart.adopted
     let amountTotal = tempArr.map((x) => x.birdAmount).reduce((a,b) => a + b, 0)
     let bonus = []; 
           amountTotal = tempArr.map((x) => x.birdAmount).reduce((a,b) => a + b, 0)  
          if (amountTotal >= 100 && amountTotal <= 300) {
             bonus.push(bonusItems[0]);
          }
          if (amountTotal >= 300 &&  amountTotal <= 500) {
             bonus.push(bonusItems[0], bonusItems[1]);
          }
          if (amountTotal>= 500 && amountTotal <= 1000) {
             bonus.push(bonusItems[0], bonusItems[1], bonusItems[2]);
          }
          if (amountTotal >= 1000) {
             bonus.push(bonusItems[0], bonusItems[1], bonusItems[2],  bonusItems[3]);
          }
     function deleteBirdFromCart(index) { 
         tempArr = tempArr.filter((event, i) => i !== index)
         let qualifiedForDiscount = false
             if (tempArr.length >= 3) {
                 amountTotal = amountTotal * 0.9
                 qualifiedForDiscount = true
             }
             let updatedCart= {total: amountTotal, discount: qualifiedForDiscount, adopted: tempArr}
             setCart(updatedCart);  
 }
     return(
        <div className='Cart'>
         <h2>Cart</h2> 
         {cart.discount ? (<h3>Discount: 10%</h3>): (<h3>Discount: 0%</h3>)}
         <h4>Total: ${cart.total.toFixed(0)}</h4>
         <ol>
             {cart.adopted.map((bird, index) => (
             <li 
             key={index} className='Card'>{bird.birdName + ' $' + bird.birdAmount}
             <button className="delButton" onClick={() => deleteBirdFromCart(index)}>Delete</button>
             </li>))}
         </ol>
         <p>Your donation has qualified for the following bonus items:</p>
         <ul>{bonus.map(( b,index ) => { return <li key={index}>{b}</li>;})}</ul>
        </div>
     )
 }

 export default Cart;