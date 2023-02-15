// export default function UserCart (cartQueue, setQueue) {
//     const [discount, setDiscount] = useState(0)
//     const totalAmount = cartQueue.reduce((total, item) => {
//         return total + item.Amount
//     })
//     return (
//         <div className="cart">
//         <p className="asideheader">Cart</p>
//         <h4>discount: {setDiscount}%</h4>
//         <p>Total: {totalAmount}</p>
//         <ol>
//             {/* cartQueue.map(cartItem => {
//                 return (
//                     <li>key={cartItem.id}{cartItem.name}: ${cartItem.amount}</li>
//                 )
//             }) */}

//         </ol>
//         </div>
        
//     )
// }


export default function Cart({addBird}) {

    console.log("Bird: ", addBird )
      
    
  
    return (
        <div>
            <h1>Cart</h1>
            <h2>Discount</h2>
            <h3>Total: 0</h3>
     
        
        {/* <button type="onClick"></button> */}
    
      </div>
    );
  }