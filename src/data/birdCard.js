// ! card requirements --v
// - The bird data comes from `src/data/birds.js`
// - Each bird card displays the name, image, and amount (price)
// - Each bird card has a class name of `card`
// - Each bird card has an `Adopt` button
//   - The button text should be: `Adopt`

import birdData from "./birds.js";

export default function Card({ cart, total, setTotal, setDiscount }) {

    //  * function to iterate & return desired adopted bird with proper discount,total and id ---v
    function adopt(bird) {
        setTotal(total + bird.amount)

        let arr = cart
        let adoptInfo = { birdname: bird.name, birdamt: bird.amount }

        arr.push(adoptInfo)
        let newTotal = arr.map((x) => x.birdamt).reduce((a, b) => a + b, 0)

 if (arr.length >= 3) {

            setDiscount(true)
            setTotal(newTotal * 0.9)

        } else {
            setTotal(newTotal)
        }

    }

    // * returns the bird image,name and amount as clicked --v
    return (
        <div className="Card">
            {birdData.map((bird) => {
                return (
                    <div key={bird.id} className="birds-info">
                        <h4>{bird.name}</h4>
                        <img src={bird.img} alt={bird.name} />
                        <p>Price: $ {bird.amount}</p>
                        <button onClick={() => adopt(bird)} >Adopt</button>
                    </div>
                )
            })}
        </div>
    )
}

