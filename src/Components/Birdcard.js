import {v1 as generateUniqueID} from "uuid";

 

export default function Birdcard({ birdData, cartQueue, setCartQueue }) {


    function addCardToCart(bird) {
        setCartQueue([...cartQueue, {
            name: bird.name,
            amount: bird.amount,
            id: generateUniqueID()
        }])
    }

    return(
        <div className="card">
            {
                birdData.map((bird) => {
                    return(
                        <div className="birds" key={bird.id}>
                            <p className="cardHeader">{bird.name}</p>
                            <p className="cardPrice">Price: ${bird.amount}</p>
                            <img className="cardImg" src={bird.img} alt={bird.name} />
                            <button className="cardButton" onClick={() => addCardToCart(bird)}>Adopt</button>
                        </div>
                    )
                })  
            }
        </div>
    )
    
}