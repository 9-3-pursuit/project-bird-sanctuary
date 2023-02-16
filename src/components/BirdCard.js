import birdData from "../data/birds";



function BirdCard({cart4Bird, setMyCart}){
    function addToCart(bird)
    {

      let arr = cart4Bird.adopted
      let theAdoptedBird = {birdname: bird.name,  birdamount: bird.amount}
      arr.push(theAdoptedBird)
      let tempBirbTotal = arr.map((birb) => birb.birdamount).reduce((a,b)=> a+b,0)
      let myCart= {total: tempBirbTotal, adopted: arr }
      
      if(myCart.adopted.length >= 3) {
     
       let totalDiscAmount = (tempBirbTotal * 0.9)
       let adoptedBirds = myCart.adopted
       let cart2 = {total: totalDiscAmount , discount: true, adopted: adoptedBirds}
       
       setMyCart(cart2)
      } 
      else {
      setMyCart(myCart)}

    } 
    return(
        <div className="birds">
        <ul>
          {birdData.map((bird, index) => {
            return(
            <li key={index} className="card">
            <h3>{bird.name}</h3> 
            <img src={bird.img} alt=''/>
            <p>Price {bird.amount}</p>
            <button className="adoptButton" onClick={() => addToCart(bird)}>Adopt</button>   

            </li>
          
            );
          })}
        </ul>
      </div>

);
}
    export default BirdCard;