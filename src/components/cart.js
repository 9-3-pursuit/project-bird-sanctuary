export default function Cart({total,discount,bonus,cart,deleteFromCart}){
    return (
      <div className="Cart">
        <h2>Cart</h2>
        <p>Discount: {discount}%</p>
        <label>Total: <h4>${ total * ( 1-discount/100 ) }</h4></label>
        <div >
          <ol className="actualCart">
            {cart.map((el,ids)=>{
              return <li key={ids}>
                <span>{el.name}</span>
                <span>${el.amount}</span>
                <button onClick={()=>{deleteFromCart(ids)}}>X</button>
              </li>
            })}
          </ol>
          <p>{bonus.length>0 ? "Bonus Items" : ""}</p>
          <ul className="bonusitems">
            {bonus.map((el,ids)=> <li key={ids}>{el}</li> )}
          </ul>
        </div>
      </div>
    )
  }
