export default function BirdCard({ name, img, amount, id }) {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{amount}</p>
      <img src={img} alt={name} />
      <button>Adopt</button>
    </div>
  );
}
