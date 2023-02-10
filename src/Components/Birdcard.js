

export default function Birdcard({ birdData }) {

    return birdData.map(bird => {
        return(
        <div className="card">
            <p className="cardHeader">{bird.name}</p>
            <p className="cardPrice">Price: ${bird.amount}</p>
            <img className="cardImg" src={bird.img} alt={bird.name} />
            <button className="cardButton">Adopt</button>
        </div>
    )
    })
    
}