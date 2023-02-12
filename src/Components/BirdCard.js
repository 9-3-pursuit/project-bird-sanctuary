import birdData from "../data/birds";

function BirdCard({ myCart, setMyCart }) {
    function addToCart(bird) {
     
      let arr = myCart.adopted
      let adoptedBird = bird.name + ' $' + bird.amount
      let cart= {total: myCart.total + bird.amount, adopted: [...arr,adoptedBird] }
     
      if(cart.adopted.length >= 3) {
     
       let totalDisc = (cart.total * 0.9)
       let adopted2 = cart.adopted
       let cart2 = {adopted: adopted2, discount: true, total: totalDisc }
       
       setMyCart(cart2)
      } else {
      setMyCart(cart)}

    } 

    return(
       <div className='card'>
        <ul>
            {birdData.map((bird, index) => {
        return (
            <li key={index}>
                <h3>{bird.name}</h3>
                <img src={bird.img} alt=''/>
                <p>Price {bird.amount}</p>
                <button onClick={() => addToCart(bird)}>Adopt</button>
            </li>
        )
    })
  }
        </ul>
       </div>
    )
};

export default BirdCard;