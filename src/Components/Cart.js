import { v1 as generateUniqueID } from "uuid"
import bonusItems from "../data/bonusItems";

export default function Cart ({items , discount , setDisount , setCartItems} ) {
    const cartData = items.map(item => {
        return (
            <li key={generateUniqueID()}>
                {item.name} ${item.amount} 
                <button className="remove-button" onClick={() => handleClick(item)}>Remove</button>
            </li>
        )
    }) 
    
    function handleClick(item) {
        const filtered = items.filter(element => element.id !== item.id )
        setCartItems(filtered)
        
    }
    
    let total = items.reduce((sum,item) => sum + item.amount, 0);
    
    if (cartData.length <= 2) {
        discount = 0;
    } else  {
        discount = 10;
        total = total - ((total * discount)/100);
    }

    return (
        <div className='Cart'>
            <h2>Cart</h2>
            <h4>Discount: {discount}%</h4>
            <h4>Total: ${total}</h4>
            <ol>{cartData}</ol> 
            <p>Your donation has qualified you for the following items.</p>
            <ul>
                { total >= 100 ? <li>{bonusItems[0]}</li> : null }
                { total >= 300 ? <li>{bonusItems[1]}</li> : null } 
                { total >= 500 ? <li>{bonusItems[2]}</li> : null }
                { total >= 1000 ? <li>{bonusItems[3]}</li> : null }
            </ul> 
        </div>
    )
  };