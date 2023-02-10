import "./BirdCard.css";

export default function BirdCard({ name, img, amount, id, onClick }) {
  return (
    <div key={id} className="card birds border-black">
      <h5>{name}</h5>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button onClick={() => onClick({ name: name, amount: amount, id: id })}>
        {" "}
        Adopt
      </button>
    </div>
  );
}
