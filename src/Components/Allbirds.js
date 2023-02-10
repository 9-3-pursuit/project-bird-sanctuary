export default function AllBirds({ birdData }) {

    const birds = birdData.map((element) => {

        return (
            <div className="card">
                <h5>{element.name}</h5>
                <h6>Price: ${element.amount}</h6>
                <img src={element.img} />
                <button type="submit" text="Adopt">Adopt</button>
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