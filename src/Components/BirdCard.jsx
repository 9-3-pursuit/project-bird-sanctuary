import "./BirdCard.css";
import { v4 as uuidv4 } from "uuid";

export default function BirdCard({ bird, dispatch, currentMode }) {
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
