import {v1 as generateUniqueID} from "uuid";


function Birds({ birdData, cartQueue, setCartQueue, setDiscount }) {


    function addBird(bird) {
        setCartQueue([...cartQueue, {
            name: bird.name,
            amount: bird.amount,
            id: generateUniqueID()
        }])
        handleDiscount();

    }


    function handleDiscount() {
        if (cartQueue.length + 1 >= 3){
            setDiscount(10)
        } else {
            setDiscount(0)
        }
    }

    return(
        <div className="card">
            { birdData.map((bird) => {
                    return(
                        <div className="birds" key={bird.id}>
                            <p className="birdName">{bird.name}</p>
                            <p className="birdPrice">Price: ${bird.amount}</p>
                            <img src={bird.img} alt={bird.name} />
                            <button className="addButton" onClick={() => addBird(bird)}>Adopt</button>
                        </div>
                    )
                })  
            }
        </div>
    )}

export default Birds;