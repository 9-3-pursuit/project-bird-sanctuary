export default function BirdInfo(props) {
  return (
    <article>
      <img src={props.img} alt={props.name} width="150" />
      <h5>{props.name}</h5>
      <p>Price: ${props.amount}</p>
    </article>
  );
}
