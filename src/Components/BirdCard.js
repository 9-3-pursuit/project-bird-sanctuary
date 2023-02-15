
import birdData from "../data/birds";



function birdCardData({cart, setMyCart}){
    function birdAddToCart(bird)
    {

      let birdArr = cart.adopted
      let adoptedBird = {birdname: bird.name,  birdamount: bird.amount}
      birdArr.push(adoptedBird)
      let birdTotal = birdArr.map((x) => x.birdamount).reduce((a,b)=> a+b,0)
      let birdCart= {total: birdTotal, adopted: birdArr }
      
      if(birdCart.adopted.length >= 3) {
     
       let birdTotalDisc = (birdTotal * 0.9)
       let birdAdopted2 = birdCart.adopted
       let birdCart2 = {total: birdTotalDisc , discount: true, adopted: birdAdopted2}
       
       setMyCart(birdCart2)
      } 
      else {
      setMyCart(birdCart)}

    } 
    return(
        <div className="card">
        <ul>
          {birdData.map((bird, index) => {
            return(
            <li key={index} className="Card">
            <h3>{bird.name}</h3> 
            <img src={bird.img} alt=''/>
            <p>Price {bird.amount}</p>
            <button onClick={() => birdAddToCart(bird)}>Adopt</button>   

            </li>
          
            );
          })}
        </ul>
      </div>

);
}
    export default birdCardData;






