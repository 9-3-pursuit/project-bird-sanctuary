export default function BirdCards({ birds }) {
    return (
        <>
            <div className="bird_cards">
                <ul>
                    {birds.map((bird) => {
                        return (
                            <>
                                <li className="card" key={bird.id}>
                                    <img src={bird.img} alt={bird.name} />
                                    <h5>
                                        {bird.name}
                                    </h5>
                                    <br />
                                    <h5>
                                        ${bird.amount}
                                    </h5>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}