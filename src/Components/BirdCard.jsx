import "./BirdCard.css";

export default function BirdCard({ name, img, amount, id }) {
  return (
    <div key={id} className="card border-black">
      <h5>{name}</h5>
      <p>${amount}</p>
      <img src={img} alt={name} />
      <button>Adopt</button>
    </div>
  );
}
