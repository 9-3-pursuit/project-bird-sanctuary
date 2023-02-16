import BonusItems from "./bonusItems"

function Cart({cart4Bird, setMyCart}) {
 
    function removebird(index) {
         let temporaryArray = cart4Bird.adopted
         temporaryArray = temporaryArray.filter((e,i) => i !== index)
         let tempOdiscount = false
         
         let tempOrTotal = temporaryArray.map((x) => x.birdamount).reduce((a,b)=> a+b,0)
         if (temporaryArray.length >= 3) {
            tempOrTotal = tempOrTotal * 0.9
            tempOdiscount = true
         }    
         
         let newCart4Bird= {total: tempOrTotal, discount: tempOdiscount, adopted: temporaryArray}
          setMyCart(newCart4Bird)
         
    }
   
    
    return(
        <div className='Cart'>
        <h2>Cart</h2>
        {cart4Bird.discount ? (<h3>Discount: 10%</h3>):(<h3>Discount: 0%</h3>)}
        <h4>Total: ${cart4Bird.total.toFixed(0)} </h4>
        <ol>
           {
            cart4Bird.adopted.map((bird,index) =>
                 (    
                    
                    <li key={index} className="Card">
                        {bird.birdname + " $" + bird.birdamount}
                        <button className="deleteButton" onClick={() => removebird(index)}>X</button>
                    </li>
                    
                    )
                    
            )
            
           }
        </ol>
        <p>Your donations qualify for the following bonus items:</p>
         <BonusItems cart4Bird={cart4Bird}/>
       </div>
    );
}

export default Cart;