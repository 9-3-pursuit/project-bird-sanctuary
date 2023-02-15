import BirdCard from "./BirdCard"

export default function BirdCards({ birds, setCartItems, addToCart }) {


    return (
        <>
            <div className="birds">
                <ul>
                    {birds.map((bird) => {
                        return (
                            <>
                                <BirdCard addToCart={addToCart} setCartItems={setCartItems} bird={bird} />
                            </>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}