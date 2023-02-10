
import { useState } from "react";
import AllBirds from "./Allbirds";

export default function Cart({ birdData }) {
    // console.log({ birds })
    //acessing birds data through birds app
    const [total, setTotal] = useState(0);
    const [birdCard, setBirdCard] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [bonusItems, setBonusItems] = useState({})

    function handleTotal() {

    }

    // function setTotal({ total }) {
    //     if (total) {
    //         return
    //     }
    //     function setDiscount() {
    //         setTotal(discount - 1)

    //     }
    return (
        <div>

        </div>
    );
}

// result for what the user put in at check out
// import from checkout, can either