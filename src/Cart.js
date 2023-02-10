export default function Cart(props) {
  console.log(props);
  const cartList = props.selected.map((item) => {
    return (
      <li>
        {item.name}: ${item.amount}
      </li>
    );
  });
  return (
    <>
      <h4>Cart</h4>
      <h5>Discount: </h5>
      <h5>Total: </h5>
      <ol className="Cart">{cartList}</ol>
    </>
  );
}
