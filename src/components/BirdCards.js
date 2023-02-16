import birdData from "../data/birds.js";


 function BirdCards({cart, setMyCart}) {
 
 
    function addToCart(bird)
       {

         let arr = cart.adopted
         let adoptedBird = {birdname: bird.name,  birdamount: bird.amount}
         arr.push(adoptedBird)
         let temptotal = arr.map((x) => x.birdamount).reduce((a,b)=> a+b,0)
         let myCart= {total: temptotal, adopted: arr }
         
         //let totalprops = temptotal
         
         if(myCart.adopted.length >= 3) {
        
          let totalDisc = (temptotal * 0.9)
          let adopted2 = myCart.adopted
          let cart2 = {total: totalDisc , discount: true, adopted: adopted2}
          
          setMyCart(cart2)
          //totalprops = totalDisc
         } 
         else {
         setMyCart(myCart)
        }
        
      
       } 

    return(
        <div className="birds">
          <ul>
            {birdData.map((bird, index) => {
              return (
                <li key={index} className="card">
                <h3>{bird.name}</h3>
                <img src={bird.img} alt=''/>
                <p>Price {bird.amount}</p>
                <button  onClick={() => addToCart(bird)}>Adopt</button>
            </li>
              );
            })}
          </ul>
        </div>
    );
}

export default BirdCards;
