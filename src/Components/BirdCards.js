import { v1 as generateUniqueID } from "uuid"

export default function BirdsCards ( {birds, items, setCartItems} ) {
   
    function handleClick (bird){
       setCartItems([...items , {
        name: bird.name,
        amount: bird.amount,
        id: generateUniqueID(),
       }])
    }
    const birdsCards = birds.map((bird) => {
        return(
           <div className="birds" key={bird.id}> 
                <h5>{bird.name}</h5>
                <p>Price: ${bird.amount}</p>
                <img src={bird.img} alt={bird.name} /> 
                <button onClick={() => handleClick(bird)}>Adopt</button>             
            </div>
        )
    })
    return (
        <div className="card">
           {birdsCards}
        </div>
    )
  }
  
 

