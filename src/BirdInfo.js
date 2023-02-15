export default function BirdInfo(props) {
  return (
    <article>
      <h5>{props.name}</h5>
      <p>Price: ${props.amount}</p>
      <img src={props.img} alt={props.name} width="150" />
    </article>
  );
}
