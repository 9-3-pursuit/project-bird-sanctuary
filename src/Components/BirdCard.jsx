import "./BirdCard.css";
import { v4 as uuidv4 } from "uuid";

export default function BirdCard({ bird: { name, img, amount, id }, onClick }) {
  return (
    <div key={id} className="card birds border-black">
      <h5>{name}</h5>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button
        onClick={() => onClick({ name: name, amount: amount, id: uuidv4() })}
      >
        {" "}
        Adopt
      </button>
    </div>
  );
}
