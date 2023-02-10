export default function BirdInfo(props) {
  return (
    <article className="card">
      <img src={props.img} alt={props.name} width="150" />
      <h5>{props.name}</h5>
      <p>Price: ${props.amount}</p>
      <button>Adopt</button>
    </article>
  );
}
