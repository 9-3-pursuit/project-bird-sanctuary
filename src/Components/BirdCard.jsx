import "./BirdCard.css";
import { v4 as uuidv4 } from "uuid";

export default function BirdCard({
  bird: { name, img, amount, id },
  dispatch,
}) {
  function handleAddToCart(birdToAddToList) {
    dispatch({
      type: "added",
      birdToAddToList: birdToAddToList,
      amount: birdToAddToList.amount,
    });
  }

  return (
    <div key={id} className="card birds border-black">
      <h5>{name}</h5>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button
        onClick={() =>
          handleAddToCart({ name: name, amount: amount, id: uuidv4() })
        }
      >
        {" "}
        Adopt
      </button>
    </div>
  );
}
