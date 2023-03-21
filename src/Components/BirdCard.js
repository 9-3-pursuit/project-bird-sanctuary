
import "../Components/BirdCard.css"


export default function BirdCard({ bird, addToCart }) {
    
   
        return (
            <div  className="birds card">
             <h4>{bird.name}</h4>
                <p>Total ${bird.amount}</p>
                <img src={bird.img} width="200" height="200" alt="bird"></img>
                <br></br>
                <button onClick={(event)=> addToCart(bird)}>
                    Adopt
                </button>
            </div>
        )
        
       
    }

