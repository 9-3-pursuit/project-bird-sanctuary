export default function BirdCard({ bird, addToCart, renderCart }) {
    console.log();
    return (
        <>
            <li key={bird.id} className="card">
                <img src={bird.img} alt={bird.name} />
                <h5>
                    {bird.name}
                </h5>
                <br />
                <h5>
                    ${bird.amount}
                </h5>
                <button value={bird.id} onClick={() => { addToCart(bird) }}>Add To Cart</button>
            </li>
        </>
    )
}