import "./BirdCards.css"

function BirdCards (props) {
   
    return (
        <div className="birds">
            <ul>
                {props.birds.map((bird)=>{return (
                    <li className="card" key={bird.id}>
                        <h5>{bird.name}</h5>
                        <h6>Price ${bird.amount}</h6>
                        <img src={bird.img} alt={bird.name}/>
                        <button value={bird.name} id={bird.amount} onClick={props.adoptBird}>Adopt</button>
                    </li>
                )})}
            </ul>
        </div>
    );
}

export default BirdCards;