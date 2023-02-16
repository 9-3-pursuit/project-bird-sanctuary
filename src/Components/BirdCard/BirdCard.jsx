import "./BirdCard.css";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ModeContext, CartDispatchContext } from "../../data/modeContext";

export default function BirdCard({ bird }) {
  const currentMode = useContext(ModeContext);
  const dispatch = useContext(CartDispatchContext);

  const { name, img, amount, id } = bird;

  function handleAddToCart() {
    const BIRD_TO_ADD_TO_LIST = { name, amount, id: uuidv4() };
    dispatch({
      type: "added",
      birdToAddToList: BIRD_TO_ADD_TO_LIST,
      amount: amount,
    });
  }

  return (
    <div key={id} className={`card birds border-black ${currentMode}`}>
      <h5>{name}</h5>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button onClick={handleAddToCart}> Adopt</button>
    </div>
  );
}
