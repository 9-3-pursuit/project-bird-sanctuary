import "./Cards.css"
import Card from "./Card"


function Cards({ birds, onBirdAdopted, createList}) {

    function handleClick(birdId) {
        const birdIndex = birds.findIndex((bird) => {
            return bird.id === birdId;    
        })
        onBirdAdopted(birdIndex)
        console.log(birdIndex)
    }

    return (
        <ul className="birds">
            {birds.map((bird) => (
                <Card key={bird.id} bird={bird} handleClick={handleClick}/> //           
            ))
            }
        </ul>
    )
}


export default Cards


