export default function formatCart({ name, amount, id }, onClick) {
  <li key={id} id={id}>
    {" "}
    {name}: ${amount}
    <button className="Cart-button" onClick={(e) => onClick(e, amount)}>
      Delete
    </button>
  </li>;
}
