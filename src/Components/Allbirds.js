export default function AllBirds({ birdData, setBirdCart, birdCart }) {
    function handleClick(bird) {
        // destructuring state for cart
        setBirdCart([...birdCart, bird])
        console.log(birdCart)
    }
    const birds = birdData.map((element) => {

        return (
            <div key={birdCart.id} className="card">
                <h5>{element.name}</h5>
                <h6>Price: ${element.amount}</h6>
                <img alt="bird.name" src={element.img} />
                <button onClick={() => handleClick(element)} type="submit" text="Adopt">Adopt</button>
            </div>)
    })
    return (
        <div>
            {birds}
        </div>
    );
}

// bird array goes here!
//map through birdData.js to get to all birds