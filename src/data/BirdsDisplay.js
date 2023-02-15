export default function BirdsDisplay({birds,cart,setCart}){
    function handleClick(bird){
        setCart([...cart,bird])
    }

    const bird = bird.map((bird) => {
        return (
            <div className="card" key={bird.id}>
                    <h5>(bird.name)</h5>
                    <h6>Price:${bird.amount}</h6>
                    <img alt="bird.name" src={bird.img}/>
                    <button onClick={() => handleClick(bird)} type = "submit" text="Adopt">Adopt</button>
                </div>
            )
    })
    return (
        <div>
            {bird}
        </div>
    )
}