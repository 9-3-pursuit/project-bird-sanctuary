import birdData from "../data/birds";

function BirdCard({ myCart, setMyCart }) {
    function addBirdsToCart(bird) {
     
      const myArr = myCart.adopted
      const adoptedBird = {birdName: bird.name, birdAmount: bird.amount}
      myArr.push(adoptedBird)

      const amountTotal = myArr.map((x) => x.birdAmount).reduce((a, b) => a + b, 0)

      const mySecondCart= {total: amountTotal,  adopted: myArr}
     
      if(mySecondCart.adopted.length >= 3) {
     
       const discountTotal = (amountTotal * 0.9)
       const adoptedBirds = mySecondCart.adopted
       const cart = {total: discountTotal, discount: true,  adopted: adoptedBirds }
       
       setMyCart(cart)
      } else {
      setMyCart(mySecondCart)}

    } 

    return(
       <div className='birds'>
        <ul>
            {birdData.map((bird, index) => {
        return (
            <li key={index} className='card'>
                <h3>{bird.name}</h3>
                <img src={bird.img} alt=''/>
                <p>Price ${bird.amount}</p>
                <button onClick={() => addBirdsToCart(bird)}>Adopt</button>
            </li>
        )
    })
  }
        </ul>
       </div>
    )
};

export default BirdCard;