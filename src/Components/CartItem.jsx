export default function CartItem({ item, onClick }) {
  const { name, amount, id } = item;
  return (
    <li key={id} id={id}>
      {" "}
      {name}: ${amount}
      <button className="Cart-button" onClick={(e) => onClick(e, amount)}>
        Delete
      </button>
    </li>
  );
}
