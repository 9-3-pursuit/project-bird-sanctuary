import "./Cards.css"
import Card from "./Card"


function Cards({ birds, onBirdAdopted }) {

    function handleClick(birdId) {
        const birdIndex = birds.findIndex((bird) => {
            return bird.id === birdId;    //e.target.id always comes as a string
        })
        onBirdAdopted(birdIndex)
    }

    return (
        <ul>
            {birds.map((bird) => (
                <Card key={bird.id} bird={bird} handleClick={handleClick} /> //           
            ))
            }
        </ul>
    )
}


export default Cards


